import { useEffect, useState } from "react";

type BloggerPost = {
  id: string;
  postId: string;
  title: string;
  url: string;
  published: string;
  excerpt: string;
  category: string;
  thumbnail?: string;
};

const FEED_URL =
  "https://wishwanett.blogspot.com/feeds/posts/default?alt=json-in-script";

const stripHtml = (value: string) =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value: string, length: number) =>
  value.length > length ? `${value.slice(0, length).trim()}...` : value;

const formatDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const extractImageFromContent = (html: string) => {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (imgMatch?.[1]) return imgMatch[1];
  return null;
};

const upgradeImageQuality = (url: string | undefined) => {
  if (!url) return undefined;
  return url
    .replace(/\/s72(-c)?/i, "/s1600")
    .replace(/\/w72-h72(-c)?/i, "/w1200-h800")
    .replace(/\/s320(-c)?/i, "/s1600")
    .replace(/\/w320-h[^/]+/i, "/w1200-h800");
};

const normalizeEntry = (entry: any): BloggerPost => {
  const rawId: string | undefined = entry?.id?.$t;
  const postId =
    rawId?.match?.(/post-([0-9]+)/)?.[1] ||
    entry?.link
      ?.find?.((linkItem: any) => linkItem.rel === "alternate")
      ?.href?.split("/")
      .pop() ||
    "";
  const link =
    entry?.link?.find?.((linkItem: any) => linkItem.rel === "alternate")
      ?.href || "#";
  const content = entry?.summary?.$t || entry?.content?.$t || "";
  const published = entry?.published?.$t || entry?.updated?.$t || "";
  const mediaThumb = upgradeImageQuality(entry?.media$thumbnail?.url);
  const contentThumb = upgradeImageQuality(extractImageFromContent(content));
  const thumbnail = contentThumb || mediaThumb;
  const categories =
    entry?.category?.map?.((item: any) => item?.term).filter(Boolean) || [];

  return {
    id: rawId || link,
    postId,
    title: entry?.title?.$t || "Untitled post",
    url: link,
    published: formatDate(published),
    excerpt: truncate(stripHtml(content), 180),
    category: categories[0] || "Blog",
    thumbnail,
  };
};

export const useBloggerPosts = (limit = 24) => {
  const [posts, setPosts] = useState<BloggerPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let script: HTMLScriptElement | null = null;
    const callbackName = `bloggerFeed_${Date.now()}`;

    const cleanup = () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
      // @ts-expect-error dynamic callback for JSONP
      delete window[callbackName];
    };

    // @ts-expect-error dynamic callback for JSONP
    window[callbackName] = (data: any) => {
      if (!isMounted) return;
      try {
        const entries = data?.feed?.entry || [];
        const normalized = entries
          .slice(0, limit ?? entries.length)
          .map(normalizeEntry);
        setPosts(normalized);
      } catch (err) {
        setError("Unable to load blog posts right now.");
      } finally {
        setLoading(false);
        cleanup();
      }
    };

    script = document.createElement("script");
    script.src = `${FEED_URL}&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      if (!isMounted) return;
      setError("Unable to load blog posts right now.");
      setLoading(false);
      cleanup();
    };
    document.body.appendChild(script);

    return () => {
      isMounted = false;
      cleanup();
    };
  }, [limit]);

  return { posts, loading, error };
};

export type { BloggerPost };

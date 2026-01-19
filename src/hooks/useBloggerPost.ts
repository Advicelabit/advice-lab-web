import { useEffect, useState } from "react";
import { BloggerPost } from "./useBloggerPosts";

type BloggerPostDetail = BloggerPost & { contentHtml: string };

const FEED_BASE =
  "https://wishwanett.blogspot.com/feeds/posts/default/";

const removeScripts = (html: string) =>
  html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

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

const normalizeEntry = (entry: any): BloggerPostDetail => {
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
  const content = entry?.content?.$t || entry?.summary?.$t || "";
  const published = entry?.published?.$t || entry?.updated?.$t || "";
  const thumbnail = entry?.media$thumbnail?.url?.replace?.(
    /\/s72(-c)?/,
    "/s720"
  );
  const categories =
    entry?.category?.map?.((item: any) => item?.term).filter(Boolean) || [];

  return {
    id: rawId || link,
    postId,
    title: entry?.title?.$t || "Untitled post",
    url: link,
    published: formatDate(published),
    excerpt: "",
    category: categories[0] || "Blog",
    thumbnail,
    contentHtml: removeScripts(content),
  };
};

export const useBloggerPost = (postId: string | undefined) => {
  const [post, setPost] = useState<BloggerPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) {
      setError("No post selected.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    let script: HTMLScriptElement | null = null;
    const callbackName = `bloggerPost_${Date.now()}`;

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
        const entry = data?.entry;
        if (!entry) {
          setError("Post not found.");
        } else {
          setPost(normalizeEntry(entry));
        }
      } catch (err) {
        setError("Unable to load this post right now.");
      } finally {
        setLoading(false);
        cleanup();
      }
    };

    script = document.createElement("script");
    script.src = `${FEED_BASE}${postId}?alt=json-in-script&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      if (!isMounted) return;
      setError("Unable to load this post right now.");
      setLoading(false);
      cleanup();
    };
    document.body.appendChild(script);

    return () => {
      isMounted = false;
      cleanup();
    };
  }, [postId]);

  return { post, loading, error };
};

export type { BloggerPostDetail };

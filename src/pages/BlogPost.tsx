import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/ui/Seo";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { useBloggerPost } from "@/hooks/useBloggerPost";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = useBloggerPost(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl bg-primary/20" />
          <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full blur-3xl bg-muted/40" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 pt-10 pb-6">
            <Button
              variant="ghost"
              className="group relative overflow-hidden pl-0 pr-4 text-foreground hover:text-white"
              asChild
            >
              <Link to="/resources/blog">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className=" relative inline-flex items-center gap-2 p-8 ">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </span>
              </Link>
            </Button>
          </div>
          <ScrollAnimation animation="fade-up">
            {post && (
              <Seo
                title={post.title}
                description={post.excerpt || ""}
                image={post.thumbnail}
                pathname={`/resources/blog/${post.id}`}
                article
              />
            )}

            {loading ? (
              <div className="space-y-4 pb-16">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-64 w-full" />
              </div>
            ) : error ? (
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center mb-16">
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button asChild variant="secondary">
                  <Link to="/resources/blog">Return to blog</Link>
                </Button>
              </div>
            ) : post ? (
              <article className="relative bg-background/80 backdrop-blur-sm rounded-3xl border border-border shadow-xl p-6 md:p-10 mb-16 overflow-hidden max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/10 pointer-events-none" />
                <div className="relative space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-tight">
                      {post.category}
                    </span>
                    {post.published && (
                      <span className="text-muted-foreground">
                        {post.published}
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight text-foreground">
                    {post.title}
                  </h1>
                  <div
                    className="prose prose-lg text-black prose-headings:font-display prose-headings:text-black prose-a:text-black max-w-none prose-img:rounded-2xl prose-img:border prose-img:border-border prose-img:shadow-sm [&_p]:text-base md:[&_p]:text-lg [&_p]:leading-7 [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h3]:text-xl md:[&_h3]:text-2xl [&_img]:w-full [&_img]:h-auto [&_figure]:my-6 [&_figcaption]:text-[10px] [&_figcaption]:text-muted-foreground [&_figcaption]:text-center [&_figcaption]:leading-tight [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-2 [&_a]:hover:text-black/80"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                  />
                  <div className="pt-4">
                    <Button asChild variant="secondary">
                      <Link to="/resources/blog">Back to blog</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ) : null}
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

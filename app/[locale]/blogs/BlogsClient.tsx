"use client";

import Link from "next/link";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import "./blogs.css";

type Post = {
    slug?: string;
    title?: string;
    subtitle?: string;
    featuredImage?: { url?: string } | null;
    publishedDate?: string;
    author?: { name?: string; picture?: { url?: string } } | null;
    content?: { json?: any } | null;
    // support older shape
    fields?: any;
    sys?: { id?: string };
};

interface Props {
    posts: Post[];
}

export default function BlogsClient({ posts }: Props) {
    const t = useTranslations("Blogs");
    const locale = useLocale();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        // stub for newsletter subscription
        console.log("Subscribe:", { name, email });
        setName("");
        setEmail("");
    };

    const normalize = (post: Post) => {
        // support either GraphQL shape or Contentful fields
        const slug = post.slug ?? post.fields?.slug;
        const title = post.title ?? post.fields?.title ?? "";
        const img = post.featuredImage?.url ?? post.fields?.featuredImage?.fields?.file?.url;
        const excerpt =
            post.content?.json
                ? documentToPlainTextString(post.content.json).substring(0, 180)
                : post.fields?.content
                ? documentToPlainTextString(post.fields.content).substring(0, 180)
                : post.subtitle ?? "";
        const id = post.sys?.id ?? slug;
        return { slug, title, img, excerpt, id };
    };

    return (
        <div className="page-blogs">
            <div className="header-image" />
            <div className="container mx-auto px-5 learn-blog-container">
                <div className="crypto">
                    <div className="crypto-text">
                        <h1>{t("getFamiliar")}</h1>
                        <h2>{t("worldCrypto")}</h2>
                        <span>{t("cryptoDesc")}</span>
                    </div>
                    <div className="crypto-image">
                        <Image
                            src="/assets/wireframe-img-1-e1708013680578.png"
                            alt="Crypto Learning"
                            width={500}
                            height={300}
                            className="object-cover"
                        />
                    </div>
                </div>

                <section className="blogs">
                    {posts.length === 0 ? (
                        <div className="text-center py-10">
                            <p className="text-gray-600">{t("noPosts") ?? "No blog posts found."}</p>
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {posts.map((p) => {
                                const post = normalize(p);
                                const imgSrc = post.img ? (post.img.startsWith("http") ? post.img : `https:${post.img}`) : null;
                                return (
                                    <article key={post.id} className="card group hover:shadow-lg transition-shadow duration-200">
                                        <Link href={`/${locale}/blogs/${post.slug}`} className="block h-full">
                                            {imgSrc && (
                                                <Image src={imgSrc} alt={post.title} width={400} height={225} className="object-cover w-full h-48 rounded-t" />
                                            )}
                                            <div className="p-4">
                                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                                <p className="text-gray-600 text-sm flex-grow">{post.excerpt}...</p>
                                                <div className="mt-4 flex justify-between items-center border-t pt-4">
                                                    <span className="text-sm text-gray-500">{t("readTime") ?? "Read"}</span>
                                                    <span className="text-primary hover:text-primary-dark">{t("readMore")}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>

                <section className="newsletter my-12">
                    <div className="newsletter-text">{t("joinNewsletter")}</div>
                    <form onSubmit={handleSubscribe} className="newsletter-form mt-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t("fullName")}
                            required
                            className="focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("email")}
                            required
                            className="focus:ring-2 focus:ring-primary"
                        />
                        <button className="elementor-button elementor-size-md hover:bg-primary-dark transition-colors duration-200" type="submit">
                            <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">{t("submit")}</span>
                            </span>
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
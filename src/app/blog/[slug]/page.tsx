import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts
    const relatedPosts = blogPosts
        .filter(
            (relatedPost) =>
                relatedPost.id !== post.id &&
                (relatedPost.category === post.category ||
                    relatedPost.tags.some((tag) => post.tags.includes(tag)))
        )
        .slice(0, 3);

    return <BlogContent post={post} relatedPosts={relatedPosts} />;
} 
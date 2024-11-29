"use client";

import { useParams } from "next/navigation";
import { posts } from "@/app/data/data";
import Commentsection from "@/components/commentsection";
import Image from "next/image";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500 font-semibold mt-10 bg-slate-50">Blog post not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg mt-8 pt-20">
      {/* Post Image */}
      {post.image && (
        <div className="mb-6">
          <Image
            src={post.image} 
            alt={post.title}
            width={post.width}
            height={post.height}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Post Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>

      {/* Post Excerpt */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">{post.excerpt}</p>

      {/* Post Content */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">{post.content}</p>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Comments</h2>
        <Commentsection />
      </div>
    </div>
  );
}

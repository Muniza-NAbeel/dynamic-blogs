import Link from "next/link";
import Image from "next/image";
import { posts } from "@/app/data/data";

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg mt-28">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-4 shadow rounded-lg flex gap-4 items-center">
            {/* Thumbnail Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            {/* Post Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


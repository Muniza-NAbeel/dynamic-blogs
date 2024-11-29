"use client";

import Link from "next/link";
import { posts } from "@/app/data/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white p-6">
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-center mb-4 mt-16 shadow-lg">
              Welcome to My Food Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-center max-w-2xl mt-4 shadow-lg">
              Welcome to our food blog, where every recipe tells a story. From
              delicious homemade dishes to global flavors, we bring you simple
              yet flavorful meals that anyone can create. Join us on a culinary
              journey filled with tasty inspiration, cooking tips, and
              mouthwatering ideas to satisfy your cravings.
            </p>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <Link href={`/posts/${post.slug}`} className="block">
                {/* Post Image */}
                <Image
                  src={`/${post.slug}.jpg`}
                  alt={post.title}
                  width={500} 
                  height={350} 
                  className="w-full h-56 object-cover"
                />
                {/* Post Content */}
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {post.content.substring(0, 100)}...
                  </p>
                  <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 active:scale-95 transition-transform duration-150">
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

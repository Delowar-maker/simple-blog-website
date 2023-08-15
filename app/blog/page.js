import Link from "next/link";
import blogData from "../../data/blogData.json";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link legacyBehavior href={`/post/${post.id}`}>
              <a>{post.title}</a>
              
            </Link>
            <br />
            <Link legacyBehavior href={`/post/${post.content}`}>
              <a>{post.content}</a>
              
            </Link>
            <br />
            <Link legacyBehavior href={`/post/${post.date}`}>
              <a>{post.date}</a>
              
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

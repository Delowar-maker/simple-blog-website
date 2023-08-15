import blogData from "../../data/blogData.json";
import React from "react";

export async function getStaticPaths() {
  
  const paths = blogData.map((post) => ({
    params: { id: post.id },
  }));

 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const post = blogData.find((post) => post.id === params.id);

 
  return {
    props: { post },
  };
}

const page = ({ post }) => {
 
  return (
    <div>
      <h1>post</h1>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default page;

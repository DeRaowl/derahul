import { useEffect, useRef, useState } from "react";
import { Blog } from "./Blog";

export const BlogPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Blog
          key={post.url}
          url={post.url}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          date={post.frontmatter.pubDate}
          readingTime={post.frontmatter.readingTime}
        />
      ))}
    </>
  );
};

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useAppSelector, useAppDispatch } from "@/hooks/useAppState";
import { getAllPosts } from "@/app/services/getPosts";
import { setPosts } from "@/store/slices/blogSlice";

const Posts = () => {
  const { posts } = useAppSelector((state) => state.blog);

  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllPosts()
      .then((posts) => dispatch(setPosts(posts)))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

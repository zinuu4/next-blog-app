"use client";

import { FormEventHandler, useState } from "react";

import { getPostsBySearch } from "@/app/services/getPosts";
import { setPosts } from "@/store/slices/blogSlice";
import { useAppDispatch } from "@/hooks/useAppState";

const PostSearch = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    dispatch(setPosts(posts));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;

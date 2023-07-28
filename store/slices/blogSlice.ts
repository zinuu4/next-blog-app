import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  posts: any[];
}

const initialState: BlogState = {
  posts: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<any[]>) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = blogSlice.actions;

export default blogSlice.reducer;

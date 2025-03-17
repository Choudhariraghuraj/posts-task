import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  selectedPost: Post | null;
}

const initialState: PostState = {
  posts: [],
  selectedPost: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: () => {},
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    selectPost: (state, action: PayloadAction<Post>) => {
      state.selectedPost = action.payload;
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  },
});

export const { fetchPosts, setPosts, selectPost, editPost } = postSlice.actions;
export default postSlice.reducer;

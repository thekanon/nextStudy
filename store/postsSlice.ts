import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { Post } from '../lib/types';

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    votePost: (state, action: PayloadAction<number>) => {
      const index = state.posts.findIndex((post) => post.id === action.payload);
      if (index !== -1) {
        state.posts[index].votes++;
      }
    },
  },
});

export const { addPost, votePost } = postsSlice.actions;

export const selectPosts = createSelector(
  (state: RootState) => state.posts.posts,
  (posts) => posts
);

export default postsSlice.reducer;

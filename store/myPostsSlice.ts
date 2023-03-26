import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { Post } from '../lib/types';

interface MyPostsState {
  myPosts: Post[];
}

const initialState: MyPostsState = {
  myPosts: [],
};

const myPostsSlice = createSlice({
  name: 'myPosts',
  initialState,
  reducers: {
    addMyPost: (state, action: PayloadAction<Post>) => {
      state.myPosts.push(action.payload);
    },
    voteMyPost: (state, action: PayloadAction<number>) => {
      const index = state.myPosts.findIndex(
        (post) => post.id === action.payload
      );
      if (index !== -1) {
        state.myPosts[index].votes++;
      }
    },
  },
});

export const { addMyPost, voteMyPost } = myPostsSlice.actions;

export const selectMyPosts = createSelector(
  (state: RootState) => state.myPosts.myPosts,
  (myPosts) => myPosts
);

export default myPostsSlice.reducer;

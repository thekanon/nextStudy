import * as React from 'react';
import update from 'react-addons-update';

import { addPostAPI, updatePostAPI, deletePostAPI } from 'lib/api/post';

import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { IPost, IUser } from 'types/post';

const ADD_POST = 'post/ADD_POST';
const UPDATE_POST = 'post/UPDATE_POST';
const DELETE_POST = 'post/DELETE_POST';

export interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

export const addPost = createAction(ADD_POST)<IPost>();
export const updatePost = createAction(UPDATE_POST)<IPost>();
export const deletePost = createAction(DELETE_POST)<number>();

export function requestAddPost(post: IPost) {
  return async (dispatch) => {
    try {
      const res = await addPostAPI(post);
      dispatch(addPost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function requestUpdatePost(post: IPost) {
  return async (dispatch) => {
    try {
      const res = await updatePostAPI(post);
      dispatch(updatePost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function requestDeletePost(id: number) {
  return async (dispatch) => {
    try {
      const res = await deletePostAPI(id);
      dispatch(deletePost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}

const actions = { addPost, updatePost, deletePost };
type PostAction = ActionType<typeof actions>;

export default createReducer<PostState, PostAction>(initialState, {
  [ADD_POST]: (state, action) => {
    return update(state, {
      posts: { $push: [action.payload] },
    });
  },
  [UPDATE_POST]: (state, action) => {
    const index = state.posts.findIndex(
      (post) => post.id === action.payload.id
    );
    return update(state, {
      posts: { [index]: { $set: action.payload } },
    });
  },
  [DELETE_POST]: (state, action) => {
    const index = state.posts.findIndex((post) => post.id === action.payload);
    return update(state, {
      posts: { $splice: [[index, 1]] },
    });
  },
});

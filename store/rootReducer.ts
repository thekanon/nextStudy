import { combineReducers } from 'redux';
import postsSliceReducer from './postsSlice';
import myPostsSliceReducer from './myPostsSlice';

const rootReducer = combineReducers({
  posts: postsSliceReducer,
  myPosts: myPostsSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

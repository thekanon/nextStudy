import { IPost } from './post';
export interface IRootState {
  posts: {
    posts: IPost[];
  };
  // myPosts: {
  //   myPosts: IPost[];
  // };
}

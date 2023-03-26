import { combineReducers, Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as postActions from './post';
import { IPost } from 'lib/types/post';
import { IRootState } from 'types/';

export type RootAction = ActionType<typeof postActions>;
export type RootState = IRootState;

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  posts: postActions.default,
});

export default rootReducer;

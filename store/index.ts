import { createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState, RootAction } from './reducers';

export function initializeStore(
  initialState: RootState = {} as RootState
): Store<RootState, RootAction> {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
    )
  );
}
export type { RootState };

/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import { initializeStore, RootState } from './index';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps, AppInitialProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: RootState) {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

type AppWithReduxProps = AppProps & {
  initialReduxState: RootState;
};

export default (
  App: NextComponentType<
    NextPageContext,
    AppWithReduxProps & Record<string, unknown>,
    AppInitialProps & Record<string, unknown>
  >
) => {
  return class AppWithRedux extends React.Component<AppWithReduxProps> {
    private readonly reduxStore: ReturnType<typeof getOrCreateStore>;

    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();

      if (appContext.ctx) {
        (appContext.ctx as NextPageContext & { reduxStore: Store }).reduxStore =
          reduxStore;
      }

      let appProps: any = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props: AppWithReduxProps) {
      super(props);
      if(props.initialReduxState) {
        console.log('initialReduxState', props.initialReduxState);
      }
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const { Component, pageProps } = this.props;
      return (
        <Provider store={this.reduxStore}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  };
};

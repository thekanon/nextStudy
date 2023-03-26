import { AppProps } from 'next/app';
import withReduxStore from '../store/withReduxStore';
import { Provider } from 'react-redux';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps, reduxStore }: AppProps & { reduxStore: any }) => {
  return (
    <Provider store={reduxStore}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default withReduxStore(MyApp);

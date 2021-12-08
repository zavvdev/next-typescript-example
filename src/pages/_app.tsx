import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { appWithTranslation } from 'next-i18next';
import store from 'src/store';
import nProgressConfig from 'src/constants/nProgressConfig';
import AppProviders from 'src/components/AppProviders/AppProviders';
import 'nprogress/nprogress.css';
import 'src/styles/globals.scss';
import 'src/styles/nprogress.scss';

NProgress.configure(nProgressConfig);

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next TypeScript Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProviders store={store}>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
};
export default appWithTranslation(App);

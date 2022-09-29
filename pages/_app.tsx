import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import * as ga from '../lib/ga';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Head from 'next/head';
import '../styles/App.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  useEffect(() => {
    const handleRouterChange = (url: URL) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log these page views
    router.events.on('routeChangeComplete', handleRouterChange);

    // if the component is unmounted, unsubscribe
    // from the event with the 'off' method
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);

  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark' : 'light';
  });

  return (
    <React.StrictMode>
      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-gray-100">
          <PropagateLoader />
        </div>
      ) : (
        <>
          <Head>
            <title>Peter Yoo's Blog</title>
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </React.StrictMode>
  );
}

export default MyApp;

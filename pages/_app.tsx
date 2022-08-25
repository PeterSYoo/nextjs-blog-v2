import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;

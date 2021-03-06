import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as fbq from '../../lib/fpixel';

// eslint-disable-next-line
const handleRouteChange = () => {
  fbq.pageview();
};

// eslint-disable-next-line
const FacebookPixel = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return children;
};

export default FacebookPixel;

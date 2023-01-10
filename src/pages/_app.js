import { useEffect } from 'react';
import '../CSS/bootstrap.css';
import '../CSS/style.css';
import TagManager from 'react-gtm-module';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-NDM844Z',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id = "my-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

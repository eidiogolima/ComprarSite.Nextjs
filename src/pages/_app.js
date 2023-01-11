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

      <Script id="my-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}
      </Script>


      {/* Tawk api*/}
      <Script id= "script-1" type="text/javascript"> {
        `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/63b979f1c2f1ac1e202c362d/1gm688mb0';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `
      }
      </Script>


      {/* Microsoft api */}
      <Script id="script" type="text/javascript">
        {' '}
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "f77itwyvrf");`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

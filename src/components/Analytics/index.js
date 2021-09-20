import React from "react";

const Analytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-YJJ1RBF07X"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-YJJ1RBF07X',  {
                page_path: window.location.pathname,
              });
          `,
      }}
    />
  </>
);

export default Analytics;

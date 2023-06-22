import Document, { Html, Head, Main, NextScript } from 'next/document';

class Decorate extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/assets/img/favicon.png" />
          <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

          {/* Google font */}
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />

          {/* Vendor CSS File */}
          <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="/assets/vendor/quill/quill.snow.css" rel="stylesheet" />
          <link href="/assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
          <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="/assets/vendor/simple-datatables/style.css" rel="stylesheet" />

          <link href="/assets/css/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <div id="preloader"></div> */}
          <Script src="/assets/vendor/apexcharts/apexcharts.min.js" />
          <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
          <Script src="/assets/vendor/chart.js/chart.umd.js" />
          <Script src="/assets/vendor/echarts/echarts.min.js" />
          <Script src="/assets/vendor/quill/quill.min.js" />
          <Script src="/assets/vendor/simple-datatables/simple-datatables.js" />
          <Script src="/assets/vendor/tinymce/tinymce.min.js" />
          <Script src="/assets/vendor/php-email-form/validate.js" />
          <Script src="/assets/js/main.js" />
        </body>
      </Html>
    );
  }
}

export default Decorate;

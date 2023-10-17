import {Html, Head, Main, NextScript} from "next/document";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body>
        <Navigation />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}


import "../styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KX88MML" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

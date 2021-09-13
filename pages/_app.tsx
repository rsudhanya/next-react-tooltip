import type { AppProps } from "next/app";

import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";

let M: any;
if (typeof window !== "undefined") {
  M = require("materialize-css");
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;

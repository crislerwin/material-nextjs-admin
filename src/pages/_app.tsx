import Head from "next/head";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { Fragment, useEffect } from "react";

import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Material-Next Admin</title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MuiThemeProvider>
    </Fragment>
  );
}
export default MyApp;

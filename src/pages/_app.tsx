import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@/styles/Global.scss";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default appWithTranslation(MyApp);

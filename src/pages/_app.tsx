import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Baloo_2, Montserrat } from "@next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${baloo.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);

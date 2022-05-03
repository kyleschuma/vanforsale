import "../styles/globals.css";
import "react-bnb-gallery/dist/style.css";
import type { AppProps } from "next/app";

export default function VanForSale({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

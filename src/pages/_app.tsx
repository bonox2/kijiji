import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/PageParts/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
      <Component {...pageProps} />
      </div>
    </>
  );
}

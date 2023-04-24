import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/PageParts/Header";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

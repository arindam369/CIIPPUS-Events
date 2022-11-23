import "../styles/globals.css";
import Layout from "../components/UI/Layout";
import Head from "next/head";
import { NotificationContextProvider } from "../store/notification-context";
import Notification from "../components/UI/Notification";

function MyApp({ Component, pageProps }) {

  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="description"
            content="CIIPPUS organised by FETSU in Jadavpur University."
          />
          <meta
            name="keywords"
            content="Jadavpur University, CIIPPUS, events, JU, cultural, united, program"
          />
          <meta name="author" content="Arindam Halder" />
          <title>CIIPPUS</title>

          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="CIIPPUS" />
          <meta
            property="og:description"
            content="CIIPPUS organised by FETSU in Jadavpur University."
          />
          <meta property="og:url" content="https://ciippus.netlify.app" />
          <meta property="og:site_name" content="CIIPPUS" />
        </Head>
        <Component {...pageProps} />
        <Notification/>
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;

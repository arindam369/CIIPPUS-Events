import '../styles/globals.css'
import Layout from '../components/UI/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="CIIPPUS organised by FETSU in Jadavpur University."/>
        <meta name="keywords" content="Jadavpur University, CIIPPUS, events, JU, cultural, united, program"/>
        <meta name="author" content="Arindam Halder"/>
        <title>CIIPPUS</title>

        <meta property="og:locale" content="en_US" />
	      <meta property="og:type" content="article" />
        <meta property="og:title" content="CIIPPUS" />
        <meta property="og:description" content="CIIPPUS organised by FETSU in Jadavpur University." />
        <meta property="og:url" content="https://ciippus.netlify.app" />
        <meta property="og:site_name" content="CIIPPUS" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

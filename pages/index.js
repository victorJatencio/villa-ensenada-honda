import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Villa Ensenada Honda | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
      </main>

    </Layout>
  )
}

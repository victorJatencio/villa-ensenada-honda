import Head from 'next/head'
import Layout from '../components/Layout'
import CardOne from '../components/CardOne/CardOne'

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

        <div className="container mx-auto px-28 mb-10 -my-24 z-10 relative">
          <div className="flex justify-between space-x-5">
            <CardOne/>
            <CardOne/>
            <CardOne/>
          </div>
        </div>
      </main>

    </Layout>
  )
}

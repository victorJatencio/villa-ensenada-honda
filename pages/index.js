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

        <div className="container mx-auto px-28">
          <p className="text-spectra-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, maxime omnis illum eveniet veritatis recusandae. Quas, similique mollitia asperiores in obcaecati ipsa distinctio voluptatibus incidunt laboriosam cum corporis labore expedita.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cum minima repudiandae, distinctio saepe enim qui ratione molestias asperiores! Libero ducimus molestias consectetur impedit doloribus veritatis, soluta eius officia enim?
          </p>
        </div>
      </main>

    </Layout>
  )
}

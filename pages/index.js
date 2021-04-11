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
        <div className="text-spectra-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, maxime omnis illum eveniet veritatis recusandae. Quas, similique mollitia asperiores in obcaecati ipsa distinctio voluptatibus incidunt laboriosam cum corporis labore expedita.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cum minima repudiandae, distinctio saepe enim qui ratione molestias asperiores! Libero ducimus molestias consectetur impedit doloribus veritatis, soluta eius officia enim?

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus corrupti ex doloribus iste aspernatur aliquam quos quae commodi, eos itaque deleniti magni quisquam architecto voluptates, corporis sint adipisci impedit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, maxime omnis illum eveniet veritatis recusandae. Quas, similique mollitia asperiores in obcaecati ipsa distinctio voluptatibus incidunt laboriosam cum corporis labore expedita.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cum minima repudiandae, distinctio saepe enim qui ratione molestias asperiores! Libero ducimus molestias consectetur impedit doloribus veritatis, soluta eius officia enim?

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus corrupti ex doloribus iste aspernatur aliquam quos quae commodi, eos itaque deleniti magni quisquam architecto voluptates, corporis sint adipisci impedit!
        </div>
      </main>

    </Layout>
  )
}

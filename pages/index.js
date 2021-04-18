import Head from 'next/head'
import Layout from '../components/Layout'
import CardOne from '../components/CardOne/CardOne'
import Hero from '../components/Hero/Hero'
import Button from '../components/Button'
import Image from 'next/image'
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
          <div className="flex justify-between space-x-12">
            <CardOne/>
            <CardOne/>
            <CardOne/>
          </div>
          <section className="py-24">
            <div className="flex">

              <div className="flex-1">
                <div>
                  <Image
                    src="/images/TheVilla.png"
                    alt="The Villa"
                    width={300}
                    height={498}
                  />
                  <span className="shadow-lg absolute z-10 mx-40 -mt-60 flex">
                    <Image
                      src="/images/beach.png"
                      alt="beach"
                      width={190}
                      height={259}
                    />
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h5 className="text-xs text-citron-500">RAISING COMFORT TO THE HIGHEST LEVEL</h5>
                <h2 className="text-2xl text-deep-sea-green-500 font-bold mb-4">Welcome to Villa Ensenada Honda</h2>
                <p className="text-base text-deep-sea-green-500 mb-4">Villa Ensenada Honda is a modern, yet cozy, bayfront house with everything you need to have a great stay in Culebra. You will love our wooden deck were you can relax with your group after a day in the sun.</p>
                <p className="text-base text-deep-sea-green-500 mb-4">The house is centrally located within 15 minutes walking distance to the town of Dewey (restaurants and bars) and less than a 5 minute car ride to Flamenco, one of the most beautiful beaches of the Planet. We are also walking distance to the airport and ferry station. Perfect for families!</p>

                <div className="mt-10">
                  <Button color="bg-java-500 hover:bg-java-400 transition duration-200 ease-in" text="Learn More" url="thevilla"/>
                </div>
                
              </div>
            </div>
          </section>

          <section>
            <p>Next Section</p>
          </section>
        </div>
      </main>

    </Layout>
  )
}

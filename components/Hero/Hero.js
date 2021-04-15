import Image from "next/image";

const Hero = () => {
  return (
    <div className="jumbotron h-screen px-4">
      <Image
        className="hero__image"
        src="/images/flamenco-beach-hero.jpg"
        alt="Flamenco Beach"
        width={1440}
        height={836}
        layout="responsive"
      />
      <div className="container mx-auto py-72 px-28 hero__content">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl text-nebula-50 font-black leading-snug">Villa Ensenada Honda</h1>
          <p className="text-2xl text-nebula-50 font-light">Culebra, Puerto Rico</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

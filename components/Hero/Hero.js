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
      <div className="container mx-auto hero__content">
        <h1>Villa Ensenada Honda</h1>
        <p>Culebra, Puerto Rico</p>
      </div>
    </div>
  )
}

export default Hero

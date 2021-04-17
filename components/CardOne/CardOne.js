import Image from "next/image";

const CardOne = () => {
  return (
    <div className="card py-5 px-5 bg-spectra-400 rounded-lg shadow-lg flex flex-col justify-end">
      <Image
        className="card__image"
        src="/images/price_card_img.png"
        alt="Villa Ensenada View"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h3 className="card__title text-catskill-white-50 text-2xl leading-10">The Villa</h3>
      <p className="card__text text-catskill-white-50 text-base py-2">Come to Villa Ensenada Honda and enjoy the stay. Our beaches, food and adventures are waiting for you.</p>
      <a href="#" className="card__link text-java-500">Read More</a>
    </div>
  )
}

export default CardOne

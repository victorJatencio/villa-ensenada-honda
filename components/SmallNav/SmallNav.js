import { FaAirbnb } from "react-icons/fa";
import { IoLogoFacebook, IoLogoInstagram, IoMdSend, IoMdCall } from "react-icons/io";

const SmallNav = () => {
  return (
    <div className="bg-deep-sea-green-500 py-2">
      <div className="container mx-auto px-28">
        <div className="flex justify-between">

          <div className="lg:flex text-sm text-deep-sea-green-300 space-x-3">
            <a className="flex items-center justify-center" href="#"><IoMdSend className="mx-2 text-xl" />info@villaensenadahonda.com</a>
            <a className="flex items-center justify-center" href="#"><IoMdCall className="mx-2 text-xl" />(406)555-0404</a>
          </div>

          <div className="flex items-center text-deep-sea-green-300 space-x-3">
            <a href="#"><FaAirbnb/></a>
            <a href="#" className="text-sm">Booking.com</a>
            <span>|</span>
            <a href="#"><IoLogoFacebook /></a>
            <a href="#"><IoLogoInstagram/></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SmallNav

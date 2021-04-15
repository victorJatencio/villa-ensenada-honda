import Link from 'next/link'
import { FaAirbnb } from "react-icons/fa";
import { IoLogoFacebook, IoLogoInstagram, IoMdSend, IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-deep-sea-green-500 py-6">
      <div className="container mx-auto px-28">
        <div className="flex">
          <div className="flex-1">
            <Link href="/">
              <span className="uppercase text-nebula-50">villa <span className="text-java-500 font-bold">ensenada honda</span></span>
            </Link>
          </div>
          <div className="flex-1">
            <h4>Address</h4>
            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
          </div>
          <div className="flex-1">
            <h4>Contact</h4>
            <p>Email:</p>
            <p>info@villaensenadahonda.com</p>
            <p>Phone:</p>
            <p>+ 308-555-0121</p>
          </div>
        </div>
        <span className="custom__divider block bg-deep-sea-green-200 mt-5"></span>
        <div className="flex justify-between pt-6">
          <p>© Villa Ensenada Honda. 2021</p>
          <div className="flex items-center">
            <a href="#"><FaAirbnb/></a>
            <a href="#">B</a>
            <a href="#"><IoLogoFacebook /></a>
            <a href="#"><IoLogoInstagram/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

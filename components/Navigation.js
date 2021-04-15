import Link from 'next/link'
import { FaAirbnb } from "react-icons/fa";
import { IoLogoFacebook, IoLogoInstagram, IoMdSend, IoMdCall } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="container bg-grey-300 mx-auto px-28 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between py-4 relative z-20">
          <div className="flex">
              <Link href="/">
                <span className="uppercase">villa <span className="text-java-500 font-bold">ensenada honda</span></span>
              </Link>
          </div>

          <div className="hidden md:flex items-center space-x-5 md:text-sm">
            <Link href="/">Home</Link>
            <Link href="/">The Villa</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Activities</Link>
            <Link href="/">Transportation</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className='md:hidden flex items-center text-deep-sea-green-500'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

          <div className="md:hidden fixed min-w-full left-0 top-0 bg-catskill-white-500 py-36 min-h-screen z-10">

            <div className="mobile__menu">
              <ul className="flex flex-col text-deep-sea-green-500 text-center">
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">The Villa</Link>
                </li>
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">Pricing</Link>
                </li>
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">Activities</Link>
                </li>
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">Transportation</Link>
                </li>
                <li className="transition duration-500 ease-in hover:bg-deep-sea-green-200">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            <hr className="block mt-5"/>
            <div>
              <div className="py-4 text-deep-sea-green-500">
                <a className="flex items-center justify-center" href="#"><IoMdSend className="mx-2 text-xl" />info@villaensenadahonda.com</a>
              </div>
              <div className="py-4 text-deep-sea-green-500">
                <a className="flex items-center justify-center" href="#"><IoMdCall className="mx-2 text-xl" />(406)555-0404</a>
              </div>
              <div className="flex items-center justify-center space-around space-x-9 px-3 py-3 text-deep-sea-green-500 text-xl">
                <a href="#"><FaAirbnb/></a>
                <a href="#">B</a>
                <a href="#"><IoLogoFacebook /></a>
                <a href="#"><IoLogoInstagram/></a>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navigation

import Navigation from './Navigation';
import Footer from './Footer';
import SmallNav from './SmallNav/SmallNav';

const Layout = ({ children }) => {
  return (
    <div>
      <SmallNav/>
      <Navigation/>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout

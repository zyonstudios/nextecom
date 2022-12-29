import { GET_HOME_SLIDES } from "../../queries/get-sliders";
import Footer from "./footer/footer";
import Header from "./header";
import Dtslide from "./slides/dtslide";


const Layout = ({children, data, logo, slides}) => {
    console.warn('logos',logo);
  return (
    <>
        <Header headerMenus={data} logo={logo}/>
        <Dtslide slides={slides} />
        {children}
        <Footer />
    </>
  )
}

export default Layout
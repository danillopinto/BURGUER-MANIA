//import Cart from "../../components/Cart/Cart"
import { CartProvider } from "../../components/CartContext/CartContext"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"


const Home = () => {

  return (
    <>
      <CartProvider>
        <Header />
        <Menu />
        <Footer />
      </CartProvider>
    </>
  )
}

export default Home

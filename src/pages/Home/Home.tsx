//import Cart from "../../components/Cart/Cart"
import { CartProvider } from "../../components/CartContext/CartContext"
import Rodape from "../../components/Footer/Rodape"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"


const Home = () => {

  return (
    <>
      <CartProvider>
        <Header />
        <Menu />
        <Rodape />
      </CartProvider>
    </>
  )
}

export default Home

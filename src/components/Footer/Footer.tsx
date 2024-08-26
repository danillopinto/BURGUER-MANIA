import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../CartContext/CartContext';
import Cart from '../Cart/Cart';

const Footer: React.FC = () => {
  const { pedidos } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <footer className=" flex justify-center p-6  gap-1 text-[18px] text-black font-[600] fixed right-5 bottom-5 ">
        <button onClick={handleToggleCart} className="flex gap-1">
          (<div id="QuantidadesPedidos">{pedidos.length}</div>) <ShoppingCartIcon />
        </button>
      </footer>
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </>
  );
};

export default Footer;
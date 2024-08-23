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
      <footer className="bg-orange-600 flex justify-center items-center p-6 fixed bottom-0 w-full gap-1 text-[18px] text-white font-[600]">
        <button onClick={handleToggleCart} className="flex gap-1">
          (<div id="QuantidadesPedidos">{pedidos.length}</div>) Veja seu carrinho <ShoppingCartIcon />
        </button>
      </footer>
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </>
  );
};

export default Footer;
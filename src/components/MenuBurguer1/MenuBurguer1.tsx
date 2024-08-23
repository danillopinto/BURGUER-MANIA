import React from 'react';
import burguer1 from "../../pages/assets/hamb-1.png";
import burguer2 from "../../pages/assets/hamb-2.png";
import burguer3 from "../../pages/assets/hamb-3.png";
import burguer4 from "../../pages/assets/hamb-4.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../CartContext/CartContext";

interface Burger {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

const burgers: Burger[] = [
  { id: 1, nome: "Cheese Burger Duplo", preco: "R$35,00", imagem: burguer1 },
  { id: 2, nome: "Smash Burguer", preco: "R$30,00", imagem: burguer2 },
  { id: 3, nome: "Picanha Power", preco: "R$25,00", imagem: burguer3 },
  { id: 4, nome: "Cheddar Supremo", preco: "R$20,00", imagem: burguer4 },
];

const MenuBurguer1: React.FC = () => {
  const { addPedido } = useCart();

  const handleAddToCart = (burger: Burger) => {
    addPedido({ ...burger, quantidade: 1 }); // Adiciona um pedido com quantidade inicial de 1
  };

  return (
    <ul className="lg:w-[45%]">
      {burgers.map((burger) => (
        <li key={burger.id} className="h-[120px] sm:h-[150px] flex items-center mb-4">
          <img src={burger.imagem} alt={burger.nome} className="rounded-[5px] h-[90%] w-[120px] object-cover" />
          <div className="ml-3 flex-1">
            <h4 className="font-[600] text-[16px]">{burger.nome}</h4>
            <p className="text-[12px] sm:text-[16px]">Pão leve de fermentação natural da Trigou, burguer 160g, queijo prato e maionese da casa</p>
            <div className="flex items-center justify-between pr-5 mt-2">
              <h5 className="font-[500]">{burger.preco}</h5>
              <button className="AddCart p-2 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => handleAddToCart(burger)}>
                <AddShoppingCartIcon className="text-teal-500 hover:text-teal-600" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuBurguer1;

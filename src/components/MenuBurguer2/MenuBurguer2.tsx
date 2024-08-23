import React from 'react';
import burguer5 from "../../pages/assets/hamb-5.png";
import burguer6 from "../../pages/assets/hamb-6.png";
import burguer7 from "../../pages/assets/hamb-7.png";
import burguer8 from "../../pages/assets/hamb-8.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../CartContext/CartContext";

interface Burger {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

const burgers: Burger[] = [
  { id: 5, nome: "Clássico Supremo", preco: "R$15,00", imagem: burguer5 },
  { id: 6, nome: "Cheddar Delícia", preco: "R$33,00", imagem: burguer6 },
  { id: 7, nome: "Gourmet BBQ", preco: "R$37,00", imagem: burguer7 },
  { id: 8, nome: "Mexicano Apimentado", preco: "R$19,00", imagem: burguer8 },
];

const MenuBurguer2: React.FC = () => {
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

export default MenuBurguer2;

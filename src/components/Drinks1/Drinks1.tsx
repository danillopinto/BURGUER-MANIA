import React from 'react';
import Drinks from "../../pages/assets/bebidas/coca-cola.png";
import Drinks2 from "../../pages/assets/bebidas/refri-2.png";
import Drinks3 from "../../pages/assets/bebidas/fanta_laranja.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../CartContext/CartContext";

interface Drink {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

const drinks: Drink[] = [
  { id: 9, nome: "Coca-Cola", preco: "R$7,00", imagem: Drinks },
  { id: 10, nome: "Refri 2", preco: "R$6,00", imagem: Drinks2 },
  { id: 11, nome: "Fanta Laranja", preco: "R$7,00", imagem: Drinks3 },
];

const Drinks1: React.FC = () => {
  const { addPedido } = useCart();

  const handleAddToCart = (drink: Drink) => {
    addPedido({ ...drink, quantidade: 1 }); // Adiciona um pedido com quantidade inicial de 1
  };

  return (
    <ul className="lg:w-[45%] mx-auto px-4">
      {drinks.map((drink) => (
        <li key={drink.id} className="h-[120px] sm:h-[150px] flex items-center mb-4 sm:mb-6">
          <img src={drink.imagem} alt={drink.nome} className="rounded-lg h-full w-[120px] sm:w-[150px] object-cover" />
          <div className="ml-4 flex-1">
            <h4 className="font-semibold text-lg sm:text-xl">{drink.nome}</h4>
            <div className="flex items-center justify-between pr-4 mt-2">
              <h5 className="font-medium text-base">{drink.preco}</h5>
              <button className="AddCart p-2 bg-gray-200 rounded-md hover:bg-gray-300" onClick={() => handleAddToCart(drink)}>
                <AddShoppingCartIcon className="text-teal-500 hover:text-teal-600" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Drinks1;

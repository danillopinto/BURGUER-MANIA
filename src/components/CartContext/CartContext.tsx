import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a interface para um pedido com os campos esperados
interface Pedido {
  id: number; // Identificador único do pedido
  nome: string; // Nome do pedido
  preco: string; // Preço do pedido
  quantidade: number; // Quantidade do pedido
}

// Define a interface para o contexto do carrinho
interface CartContextType {
  pedidos: Pedido[]; // Lista de pedidos no carrinho
  addPedido: (pedido: Pedido) => void; // Função para adicionar um pedido
  removePedido: (id: number) => void; // Função para remover um pedido pelo ID
  updateQuantidade: (id: number, quantidade: number) => void; // Função para atualizar a quantidade de um pedido
}

// Cria o contexto do carrinho com um valor padrão indefinido
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define o provedor do contexto do carrinho
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para armazenar a lista de pedidos
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  // Função para adicionar um pedido ao carrinho
  const addPedido = (pedido: Pedido) => {
    setPedidos((prevPedidos) => {
      // Verifica se o pedido já existe no carrinho
      const existingPedidoIndex = prevPedidos.findIndex(p => p.id === pedido.id);
      if (existingPedidoIndex >= 0) {
        // Se o pedido já existe, atualiza a quantidade
        const updatedPedidos = [...prevPedidos];
        updatedPedidos[existingPedidoIndex].quantidade += pedido.quantidade;
        return updatedPedidos;
      }
      // Se o pedido não existe, adiciona um novo
      return [...prevPedidos, pedido];
    });
  };

  // Função para remover um pedido do carrinho pelo ID
  const removePedido = (id: number) => {
    setPedidos((prevPedidos) => prevPedidos.filter(pedido => pedido.id !== id));
  };

  // Função para atualizar a quantidade de um pedido pelo ID
  const updateQuantidade = (id: number, quantidade: number) => {
    setPedidos((prevPedidos) => {
      return prevPedidos.map(pedido =>
        pedido.id === id ? { ...pedido, quantidade } : pedido
      );
    });
  };

  // Retorna o provedor do contexto com os valores e funções disponíveis para os componentes filhos
  return (
    <CartContext.Provider value={{ pedidos, addPedido, removePedido, updateQuantidade }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para acessar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  // Lança um erro se o hook for usado fora do provedor do contexto
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

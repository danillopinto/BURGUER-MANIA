import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';

// Define a interface para as propriedades do componente Cart
interface CartProps {
    onClose: () => void; // Função chamada quando o carrinho deve ser fechado
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
    // Obtém as funções e dados do contexto do carrinho
    const { pedidos, removePedido, updateQuantidade } = useCart();
    // Estado para armazenar o endereço de entrega
    const [endereco, setEndereco] = useState('');
    // Estado para armazenar mensagens de erro e sucesso
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Manipula a mudança na quantidade de um item
    const handleQuantidadeChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const quantidade = Number(event.target.value);
        if (quantidade > 0) {
            updateQuantidade(id, quantidade);
        }
    };

    // Manipula o clique no botão de finalizar
    const handleFinalizar = () => {
        if (pedidos.length === 0) {
            setError('Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.');
        } else if (endereco.trim() === '') {
            setError('O endereço não pode estar vazio.');
        } else {
            setError('');
            sendOrderToWhatsApp();
        }
    };

    // Envia o pedido para o WhatsApp e limpa o carrinho
    const sendOrderToWhatsApp = () => {
        const phoneNumber = '5599988346472'; // Número de telefone do destinatário
        const message = formatOrderMessage(); // Formata a mensagem do pedido
        const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para URL
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abre o link do WhatsApp em uma nova aba
        window.open(url, '_blank');
        // Define a mensagem de sucesso e limpa o carrinho
        setSuccessMessage('Pedido enviado com sucesso!');
        clearCart();
    };

    // Formata a mensagem do pedido para enviar ao WhatsApp
    const formatOrderMessage = () => {
        let message = `*Pedido Finalizado*\n\n`;
        message += `*Endereço:* ${endereco}\n\n`;
        message += `*Itens:*\n`;
        
        // Adiciona cada item do pedido à mensagem
        pedidos.forEach(pedido => {
            message += `- ${pedido.nome} - ${pedido.quantidade} x ${pedido.preco}\n`;
        });

        return message;
    };

    // Limpa todos os pedidos do carrinho
    const clearCart = () => {
        pedidos.forEach(pedido => removePedido(pedido.id));
    };

    return (
        <div className="w-full h-full bg-[#00000069] fixed top-0">
            <div className="fixed bg-white top-[50%] left-[50%] sm:w-[600px] w-[90%] h-auto transform translate-x-[-50%] translate-y-[-50%] rounded-[7px] overflow-x-auto ">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-center font-[600] text-[25px]">Seu carrinho</h2>
                    <button onClick={onClose} className="bg-red-500 p-2 rounded-lg text-white font-[500]">Fechar</button>
                </div>
                <div className="flex sm:pl-10 sm:pr-10 pl-5 pr-5 pb-4">
                    <p className="w-[33%] font-[500] border-black border-b-[1px]">Items</p>
                    <p className="w-[33%] text-center font-[500] border-black border-b-[1px]">Preço</p>
                    <p className="w-[33%] text-right font-[500] border-black border-b-[1px]">Quantidade</p>
                </div>
                <ul id="pedidos" className="flex sm:pl-10 sm:pr-10 pl-5 pr-5 pb-5 flex-col ">
                    {pedidos.map((pedido) => (
                        <li key={pedido.id} className="flex items-center">
                            <span className="w-[33%] font-[500]">{pedido.nome}</span>
                            <span className="w-[33%] text-center font-[500]">{pedido.preco}</span>
                            <input
                                type="number"
                                value={pedido.quantidade}
                                min="1"
                                onChange={(e) => handleQuantidadeChange(pedido.id, e)}
                                className="w-16 pl-2 pr-2 text-right font-[500] border-[2px] border-teal-500 bg-slate-200 rounded-lg"
                            />
                            <button onClick={() => removePedido(pedido.id)} className="ml-3 bg-red-500 p-2 m-1 rounded-lg text-white font-[500]">Remover</button>
                        </li>
                    ))}
                    <div className=" flex flex-col justify-end w-full ">
                        <h3 className=" font-[500] mb-1 mt-2 ">Endereço da entrega:</h3>
                        <input
                            type="text"
                            id="endereço"
                            className=" bg-slate-200 border-slate-400 border-[1px] p-1 "
                            placeholder='Digite seu endereço completo...'
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                        <button
                            onClick={handleFinalizar}
                            className=" bg-lime-500 w-28 p-1 rounded-md mt-4 text-white font-[600] "
                            id="botaoFinalizar"
                        >
                            Finalizar
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Cart;

import React from 'react';
import burguerHeader from "../../pages/assets/hamb-2.png";

const Header: React.FC = () => {
  // Função para obter a cor com base no horário atual
  const getColorBasedOnTime = () => {
    const currentHour = new Date().getHours();
    
    // Verifica se o horário está fora do intervalo das 18:00 e 22:00
    if (currentHour < 18 || currentHour > 22) {
      return 'bg-red-500'; // Cor vermelha para horários fora do intervalo
    } else {
      return 'bg-green-500'; // Cor verde para horários dentro do intervalo
    }
  };

  // Determina a classe do fundo com base na hora atual
  const horarioClasse = getColorBasedOnTime();

  return (
    <header className="h-[400px] w-full bg-zinc-900 bg-home bg-cover bg-center flex flex-col justify-center items-center">
      <img src={burguerHeader} className="w-[180px] rounded-full mt-[-20px] mb-[20px]" />
      <h1 className="text-white text-[30px] font-[600]">Red Burguer</h1>
      <h3 className="text-white mb-3">Rua 15, Vale do Açai, Açailândia-MA</h3>
      <h2 className={`text-white p-[8px] rounded-[5px] text-[18px] font-[600] ${horarioClasse}`} id="HorarioFuncionamento">
        Seg á Dom - 18:00 às 22:00
      </h2>
    </header>
  );
}

export default Header;

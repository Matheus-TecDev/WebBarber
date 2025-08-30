import React from 'react';
import './DepilacaoNariz.css'; // Estilização separada
import depnas from '../image-services/depsNas.jpeg'

const DepilacaoNariz = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Suavize seu Visual: Venha Experimentar Nossa Cuidadosa Depilação Nasal
      </h1>
      <div className="image-row">
        <img src= {depnas} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        A depilação nasal é uma solução refinada para manter a área nasal limpa e bem-cuidada. Este procedimento delicado remove os pelos indesejados de forma suave e eficaz, ajudando a realçar seu visual com um toque de frescor e limpeza. Utilizamos técnicas modernas e produtos de alta qualidade para garantir uma experiência confortável e resultados naturais. Perfeito para quem deseja um cuidado sutil e preciso, a nossa depilação nasal contribui para uma aparência harmoniosa e um bem-estar renovado. Agende sua sessão e descubra o efeito sutil desse tratamento especial.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20eu%20estava%20pensando%20em%20fazer%20uma%20depila%C3%A7%C3%A3o%20nasal')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default DepilacaoNariz;
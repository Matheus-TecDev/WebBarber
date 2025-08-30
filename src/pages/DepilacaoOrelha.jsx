import React from 'react';
import './DepilacaoOrelha.css'; // Estilização separada
import depsore from '../image-services/depsOrel.jpeg'

const DepilacaoOrelha = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
       <h1 className="title">
        Realce sua Aparência: Experimente Nossa Cuidadosa Depilação na Orelha
      </h1>
      <div className="image-row">
        <img src={depsore} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        A depilação na orelha é um cuidado essencial para manter uma aparência polida e bem-groomed. Este procedimento especializado é feito com precisão para remover os pelos indesejados de maneira suave e eficaz, garantindo um resultado limpo e natural. Utilizamos técnicas avançadas e produtos de qualidade para proporcionar uma experiência confortável e com ótimos resultados. Ideal para quem busca um toque de sofisticação e um visual refinado, a nossa depilação na orelha oferece um cuidado delicado e atento aos detalhes. Agende sua sessão e descubra como esse tratamento pode aprimorar sua estética.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20eu%20estava%20pensando%20em%20fazer%20uma%20depila%C3%A7%C3%A3o%20na%20orelha')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default DepilacaoOrelha;
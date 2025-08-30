import React from 'react';
import './Pedicure.css'; // Estilização separada
import pedis from '../image-services/peds.jpeg'

const Pedicure = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Cuidado e Elegância: O Toque Especial da Pedicure
      </h1>
      <div className="image-row">
        <img src={pedis} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        A pedicure vai além de um cuidado estético; é um momento de bem-estar e relaxamento para os pés, proporcionando uma sensação de conforto e leveza. Com técnicas delicadas e produtos de alta qualidade, nosso serviço de pedicure cuida da saúde dos seus pés, removendo impurezas e garantindo unhas bem tratadas e bonitas. Se você busca um cuidado especial que une estética e saúde, a pedicure é o tratamento ideal. Venha experimentar e sinta a diferença que um cuidado especial pode fazer no seu dia a dia.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20eu%20quero%20saber%20mais%20sobre%20esse%20servi%C3%A7o%20de%20pedicure,%20achei%20uma%20proposta%20muito%20interessante')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Pedicure;
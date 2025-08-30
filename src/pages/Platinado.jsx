import React from 'react';
import './Platinado.css'; // Estilização separada
import plats from '../image-services/platinado.jpeg'

const Platinado = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Estilo e Atitude: Platinado para um Visual Incrível
      </h1>
      <div className="image-row">
        <img src= {plats} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        O cabelo platinado é uma escolha ousada que transforma completamente o visual. Seja para um estilo moderno e arrojado ou para algo mais clássico, o platinado é conhecido por seu impacto visual e elegância. Nosso serviço de platinado garante um resultado impecável, preservando a saúde dos seus fios enquanto atinge o tom perfeito. Se você está pronto para mudar e adotar esse look deslumbrante, nós estamos aqui para ajudar a realizar essa transformação com toda a segurança e qualidade.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Fala%20Nathan,%20tava%20vendo%20o%20site,%20deu%20vontade%20de%20meter%20o%20platinado')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Platinado;
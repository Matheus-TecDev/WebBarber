import React from 'react';
import './Hidratacao.css'; // Estilização separada
import Hidd from '../image-services/hidra.jpeg'

const Hidratacao = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Hidratação Capilar: Revitalize Seus Fios e Renove Seu Estilo
      </h1>
      <div className="image-row">
        <img src={Hidd} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
        Cuidar do seu cabelo vai muito além de um simples corte. A hidratação capilar é essencial para manter seus fios saudáveis, brilhantes e macios. Nosso tratamento profundo nutre cada fio, devolvendo a vitalidade e o brilho perdidos com as agressões do dia a dia. Seja para proteger os cabelos de danos futuros ou para revitalizar a textura, a hidratação oferece aquele toque de cuidado que faz toda a diferença. Sinta a leveza e a renovação que uma hidratação capilar pode trazer para o seu visual!
      </p>
        </div>
      </div>
      <div className="button-row">
      <button
    className="button"
    onClick={() =>
      handleClick(
        'https://web.whatsapp.com/send?phone=5585986003990&text=Ei%20Nathan,%20acho%20que%20eu%20t%C3%B4%20precisando%20de%20uma%20hidrata%C3%A7%C3%A3o%20no%20cabelo'
      )
    }
  >
    Entre em Contato
  </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Hidratacao;
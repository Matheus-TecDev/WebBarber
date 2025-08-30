import React from 'react';
import './Corte.css'; // Estilização separada
import cortee from '../image-services/cortee.jpeg'

const Corte = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="titlec">
        O Encanto de um Corte de Cabelo: Transforme Seu Visual com Estilo
      </h1>
      <div className="image-row">
        <img src= {cortee} alt="Imagem 2" />
      </div>
      <div className="content-container">
        <div className="text-block">
          <p className="description">
            Um corte de cabelo pode ser muito mais do que um simples ajuste no comprimento; ele tem o poder de transformar seu visual, realçar sua personalidade e fazer você se sentir renovado. Seja para um evento especial, uma nova temporada ou apenas para se sentir um pouco mais elegante no dia a dia, escolher o corte certo pode fazer uma grande diferença. Vamos explorar como um bom corte de cabelo pode trazer uma nova energia para você!
          </p>
        </div>
      </div>
      <div className="button-row">
        <button
          className="button"
          onClick={() =>
            handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Ol%C3%A1%20Nathan,%20eu%20estou%20pensando%20em%20cortar%20meu%20cabelo')
          }
        >
          Entre em Contato
        </button>
        <button
          className="button"
          onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}
        >
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Corte;


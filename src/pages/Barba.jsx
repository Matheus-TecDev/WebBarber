import React from 'react';
import './Barba.css'; // Estilização separada
import barbaa from '../image-services/barbaa.jpeg'

const Barba = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
            O Poder de uma Barba Bem Cuidada: Aumente Sua Confiança com Estilo
          </h1>
          <div className="image-row">
        <img src={barbaa} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
          <p className="description">
            A barba é mais do que um simples detalhe do visual; ela é uma extensão da sua personalidade e um reflexo do seu estilo. Um cuidado adequado pode realçar a sua aparência e transmitir um ar de sofisticação e autoconfiança. Seja você um entusiasta do estilo clássico ou alguém que busca um look mais moderno, a manutenção da barba é essencial para garantir que ela sempre esteja no seu melhor. Vamos explorar como um toque especial na sua barba pode transformar sua imagem e aumentar sua confiança!
          </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=E%20a%C3%AD%20Nathan,%20eu%20tava%20afim%20de%20fazer%20a%20barba')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Barba;
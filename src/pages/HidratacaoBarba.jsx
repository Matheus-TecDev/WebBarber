import React from 'react';
import './HidratacaoBarba.css'; // Estilização separada
import Hid from '../image-services/hidrabarb.jpeg'

const HidratacaoBarba = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Hidratação na Barba: Um Toque de Sofisticação para Sua Rotina
      </h1>
      <div className="image-row">
        <img src={Hid} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
       
      <p className="description">
        Sua barba merece mais do que cuidados básicos,ela merece um tratamento de luxo. A hidratação na barba proporciona maciez, brilho e um visual bem tratado, deixando você com uma aparência impecável. Nosso tratamento hidrata profundamente os fios, eliminando o ressecamento e oferecendo uma sensação de frescor e suavidade ao toque. Ideal para homens que buscam um cuidado especial, a hidratação deixa sua barba mais alinhada e sedosa, trazendo um novo nível de confiança e estilo para o seu dia a dia.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20eu%20estou%20cogitando%20fazer%20uma%20hidrata%C3%A7%C3%A3o%20na%20minha%20barba')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default HidratacaoBarba;
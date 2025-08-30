import React from 'react';
import './Flash.css'; // Estilização separada
import flash from '../image-services/servs.jpg'
const Flash = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        O Toque Final de Elegância: Experimente Nosso Combo de Acabamento, Lavagem e Escova
      </h1>
      <div className="image-row">
        <img src={flash} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        Um combo completo de acabamento, lavagem e escova é a chave para um visual impecável e um cuidado excepcional com seus cabelos. Este tratamento não apenas garante que seus cabelos estejam limpos e bem tratados, mas também oferece um acabamento refinado e uma escova que realça o estilo desejado. O acabamento proporciona um toque final profissional, a lavagem elimina impurezas e resíduos, enquanto a escova define e suaviza, garantindo um resultado perfeito. Seja para uma ocasião especial ou para o seu dia a dia, esse combo transforma seu visual e eleva sua confiança com um toque de sofisticação.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Opa%20Nathan,%20eu%20tava%20querendo%20experimentar%20o%20flash%20servi%C3%A7o')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Flash;
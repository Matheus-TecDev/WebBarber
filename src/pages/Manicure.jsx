import React from 'react';
import './Manicure.css'; // Estilização separada
import Manss from '../image-services/mans.jpeg'

const Manicure = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Transforme Suas Mãos: Experimente Nossa Manicure Luxuosa
      </h1>
      <div className="image-row">
        <img src={Manss} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        Suas mãos merecem um toque de elegância e cuidado. Nossa manicure luxuosa oferece um tratamento completo para suas unhas, combinando técnicas de embelezamento e cuidados profundos. Desde a aplicação de esmaltes de alta qualidade até a hidratação das cutículas, garantimos que cada detalhe seja meticulosamente cuidado. Se você deseja um visual sofisticado para uma ocasião especial ou apenas um toque de frescor no seu dia a dia, nossa manicure proporciona um resultado impecável e um toque de classe. Agende sua experiência e descubra como nossas técnicas podem realçar a beleza das suas mãos.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20tava%20pensando%20em%20dar%20uma%20mudada,%20fazer%20umas%20luzes,%20seria%20poss%C3%ADvel%3F')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Manicure;
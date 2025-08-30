import React from 'react';
import './Luzes.css'; // Estilização separada
import luzis from '../image-services/luzs.jpeg'

const Luzes = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Ilumine Seu Visual: Luzes para Realçar a Beleza dos Seus Cabelos
      </h1>
      <div className="image-row">
        <img src={luzis} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
      <p className="description">
        As luzes são perfeitas para quem deseja adicionar luminosidade e profundidade ao cabelo sem alterar completamente a cor natural. Esse procedimento cria contrastes sutis ou marcantes, de acordo com a sua preferência, resultando em um visual moderno e cheio de vida. Seja para um toque suave ou um efeito mais ousado, as luzes transformam o estilo e deixam o cabelo com um brilho especial. Com nosso serviço, você pode obter o resultado que deseja, sempre respeitando a saúde dos fios.
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

export default Luzes;
import React from 'react';
import './Pigmentacao.css'; // Estilização separada
import piggg from '../image-services/pigbarb.jpeg'

const Pigmentacao = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Realce Sua Barba com Estilo: A Pigmentação Perfeita para um Visual Marcante
      </h1>
      <div className="image-row">
        <img src={piggg} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
         
      <p className="description">
        A pigmentação da barba é o segredo para um visual marcante e bem definido. Se você deseja cobrir fios brancos, intensificar o tom natural da sua barba ou apenas mudar um pouco o estilo, a pigmentação é a solução ideal. Nosso tratamento oferece uma coloração sutil e duradoura, mantendo a naturalidade e a elegância. Deixe sua barba com um aspecto renovado e mais encorpado, destacando sua personalidade e estilo. Com a pigmentação correta, você garante um visual alinhado e cheio de atitude.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Opa%20Nathan,%20cara,%20eu%20t%C3%B4%20precisando%20de%20uma%20pigmenta%C3%A7%C3%A3o%20na%20barba')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Pigmentacao;
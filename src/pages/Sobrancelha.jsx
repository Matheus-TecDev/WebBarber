import React from 'react';
import './Sobrancelha.css'; // Estilização separada
import sobran from '../image-services/sobrapin.jpeg'

const Sobrancelha = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
       <h1 className="title">
        A Arte do Design de Sobrancelhas: Perfeição em Cada Detalhe
      </h1>
      <div className="image-row">
        <img src={sobran} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
        As sobrancelhas são a moldura do seu rosto e desempenham um papel crucial em definir a expressão e o estilo pessoal. Um design bem feito não só melhora a harmonia facial, mas também adiciona um toque de sofisticação ao seu visual. Nosso serviço de design de sobrancelhas é meticulosamente planejado para ressaltar suas características naturais, com técnicas avançadas que garantem um formato elegante e impecável. Desde a análise do formato ideal até a finalização com cuidados especiais, cada etapa é feita com precisão para que você se sinta confiante e deslumbrante. Agende seu atendimento e descubra como um design perfeito pode realçar a sua beleza!
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20teria%20como%20fazer%20minhas%20sobrancelhas,%20por%20favor%3F')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Sobrancelha;
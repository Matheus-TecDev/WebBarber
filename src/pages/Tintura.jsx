import React from 'react';
import './Tintura.css'; // Estilização separada
import Tintsss from '../image-services/tints.jpeg'

const Tintura = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Transforme Seu Estilo com Nossa Tintura Capilar Profissional
      </h1>
      <div className="image-row">
        <img src={Tintsss} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
        A tintura capilar é uma excelente maneira de renovar seu visual e expressar sua personalidade. Seja para cobrir os fios brancos ou experimentar uma nova cor vibrante, nosso serviço de tintura oferece resultados de alta qualidade com produtos que respeitam a saúde dos seus cabelos. Cores intensas, brilho e uma aparência revitalizada são garantidos após o tratamento. Deixe-nos ajudar você a alcançar a cor que deseja e a realçar sua beleza natural com uma tintura que combina perfeitamente com o seu estilo.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=E%20a%C3%AD%20Nathan,%20t%C3%B4%20afim%20de%20fazer%20uma%20tintura%20capilar,%20d%C3%A1%20certo%3F')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Tintura;
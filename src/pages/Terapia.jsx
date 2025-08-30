import React from 'react';
import './Terapia.css'; // Estilização separada
import teraps from '../image-services/teraps.jpg'

const Terapia = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
       <h1 className="title">
        Revitalize Sua Pele: Experimente Nossa Terapia Facial Premium
      </h1>
      <div className="image-row">
        <img src={teraps} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
        A terapia facial é um tratamento essencial para manter a saúde e a beleza da sua pele. Nosso serviço de terapia facial é projetado para oferecer uma experiência de rejuvenescimento completa, combinando técnicas avançadas com produtos de alta qualidade. A terapia inclui limpeza profunda, esfoliação, aplicação de máscaras nutritivas e massagens relaxantes que ajudam a remover impurezas, hidratar e revitalizar a pele. Ideal para todos os tipos de pele, nosso tratamento proporciona um brilho natural e uma sensação de frescor. Permita-se esse momento de autocuidado e descubra como uma pele bem tratada pode transformar sua aparência e seu bem-estar.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20estou%20interessada%20em%20fazer%20o%20procedimento%20de%20terapia%20facial')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Terapia;
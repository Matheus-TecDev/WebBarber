import React from 'react';
import './Selagem.css'; // Estilização separada
import Sel from '../image-services/selagemzz.jpg'

const Selagem = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
      <h1 className="title">
        Renove o Brilho e a Saúde dos Seus Cabelos com Nossa Selagem Capilar
      </h1>
      <div className="image-row">
        <img src={Sel} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
        A selagem capilar é o tratamento perfeito para quem busca cabelos mais lisos, sem frizz e com um brilho radiante. Esse procedimento atua profundamente nos fios, selando as cutículas e proporcionando uma hidratação intensa. Ideal para qualquer tipo de cabelo, a selagem garante uma textura mais suave e um aspecto saudável e renovado. Se você quer dar um toque extra de beleza e cuidar dos seus cabelos com qualidade, a selagem é a escolha certa. Experimente o poder desse tratamento e sinta a diferença no toque e no visual.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Ei%20Nathan,%20eu%20tava%20vendo%20aqui%20o%20seu%20servi%C3%A7o%20de%20selagem%20capilar%20e%20estou%20interessado')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default Selagem;
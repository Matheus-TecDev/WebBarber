import React from 'react';
import './SobramNav.css'; // Estilização separada
import Nav from '../image-services/sobranav.jpeg'

const SobranNav = () => {
  const handleClick = (url) => {
    window.location.href = url; // Redireciona para a URL
  };

  return (
    <div className="corte-container">
       <h1 className="title">
       Sobrancelha na Navalha - Estilo e Precisão que Fazem a Diferença!
      </h1>
      <div className="image-row">
        <img src={Nav} alt="Imagem 2" />
      </div>
      <div className="content-container">
        {/* Div para o título e o texto */}
        <div className="text-block">
        
      <p className="description">
      Na nossa barbearia, não se trata apenas de corte de cabelo — cada detalhe do seu visual importa! A sobrancelha na navalha é uma técnica clássica que oferece precisão e estilo na medida certa. Perfeita para quem quer destacar o olhar, dar um toque mais limpo e alinhado, sem perder a naturalidade.

Com a navalha, conseguimos desenhar as linhas com extrema precisão, removendo apenas o excesso e garantindo simetria e harmonia com seu rosto. O resultado? Um visual mais marcante e bem cuidado, que combina perfeitamente com o seu corte de cabelo.

Venha realçar seu estilo e deixar a sobrancelha no formato ideal! Aqui, cada detalhe é tratado com o cuidado que você merece.
      </p>
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleClick('https://web.whatsapp.com/send?phone=5585986003990&text=Oi%20Nathan,%20estou%20afim%20de%20fazer%20a%20sobrancelha%20na%20navalha')}>
          Entre em Contato
        </button>
        <button className="button" onClick={() => handleClick('https://sites.appbarber.com.br/flashbarbearia-bqpd?fbclid=PAZXh0bgNhZW0CMTEAAaZPVIfPnHvFVx8jkR8gRfWRYv5udEEACQev6UlzxPMjrgAiX43utoHOWiQ_aem_Y9QDS5KToBMyYMUfBvOzYQ')}>
          Agende no Nosso App
        </button>
      </div>
    </div>
  );
};

export default SobranNav;
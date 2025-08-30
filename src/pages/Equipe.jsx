import React from 'react';
import './Equipe.css'; // Importa o arquivo de estilos CSS para a página
import Elias from '../image-funcionarios/Elias.jpeg'
import Carol from '../image-funcionarios/Carol.jpeg'
import Nathan from '../image-funcionarios/Nathan.jpeg'

const Equipe = () => {
  return (
    <div className="equipe-container">
      <h1 className="titlee">Nossa Equipe</h1>

      {/* Seção de Funcionários */}
      <h2 className="sectioon-titlee">Funcionários</h2>
      <div className="equipe-box">
        <img
          src={Elias} // Substitua pelo link da imagem real
          alt="Foto do Funcionário"
          className="equipe-photo"
        />
        <div className="equipe-info">
          <h3 className="equipe-name">Elias</h3>
          <p className="equipe-description">
          Oi, bem-vindo à nossa barbearia! Eu sou Elias, atendente da Flash Barbearia, e estou pronto para lhe atender com todo o cuidado e atenção que você merece. Fique à vontade para escolher o serviço desejado e conte comigo para te proporcionar uma experiência incrível. Estou à disposição para qualquer dúvida ou solicitação. Seja bem-vindo!
          </p>
        </div>
      </div>

      {/* Seção de Prestadores de Serviço */}
      <h2 className="sectioon-titlee">Prestadores de Serviço</h2>

      <div className="equipe-box">
        <img
          src={Nathan}
          alt="Foto do Prestador 1"
          className="equipe-photo"
        />
        <div className="equipe-info">
          <h3 className="equipe-name">Nathan</h3>
          <p className="equipe-description">
          Oi, sou Nathan, dono da Flash Barbearia, e meu objetivo é proporcionar a você o melhor serviço possível, sempre com o apoio da minha equipe de profissionais altamente qualificados. Estamos aqui para garantir que cada visita à nossa barbearia seja uma experiência única e satisfatória. Pode contar conosco para cuidar do seu visual com muita excelência e dedicação!

          </p>
        </div>
      </div>

      <div className="equipe-box">
        <img
          src={Carol}
          alt="Foto do Prestador 2"
          className="equipe-photo"
        />
        <div className="equipe-info">
          <h3 className="equipe-name">Carol</h3>
          <p className="equipe-description">
          Oi, sou a Carol, associada da Flash Barbearia, e estou aqui para oferecer o melhor atendimento possível com alta performance. Meu objetivo é garantir que você tenha uma experiência excelente e que saia daqui satisfeito com o resultado. Estou à disposição para ajudar no que precisar!

          </p>
        </div>
      </div>
    </div>
  );
};

export default Equipe;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import AgendamentoPix from '../components/AgendamentoPix';

import Corte from '../image-services/cortee.jpeg';
import Barba from '../image-services/barbaa.jpeg';
import Flash from '../image-services/servs.jpg';
import Sobrancelha from '../image-services/sobrapin.jpeg';
import SobranNav from '../image-services/sobranav.jpeg';
import Terapia from '../image-services/teraps.jpg';
import DepilacaoNariz from '../image-services/depsNas.jpeg';
import DepilacaoOrelha from '../image-services/depsOrel.jpeg';
import HidratacaoBarba from '../image-services/hidrabarb.jpeg';
import Hidratacao from '../image-services/hidra.jpeg';
import Pigmentacao from '../image-services/pigbarb.jpeg';
import Selagem from '../image-services/selagemzz.jpg';
import Tintura from '../image-services/tints.jpeg';
import Luzes from '../image-services/luzs.jpeg';
import Platinado from '../image-services/platinado.jpeg';
import Pedicure from '../image-services/peds.jpeg';
import Manicure from '../image-services/mans.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const buttons = [
    { id: 1, name: 'Corte', img: Corte, path: '/Corte' },
    { id: 2, name: 'Barba', img: Barba, path: '/Barba' },
    { id: 3, name: 'Flash Serviço (Acabamento + Lavagem + Escova)', img: Flash, path: '/Flash' },
    { id: 4, name: 'Sobrancelha na Pinça', img: Sobrancelha, path: '/Sobrancelha' },
    { id: 5, name: 'Sobrancelha na Navalha', img: SobranNav, path: '/SobrancelhaNaNavalha' },
    { id: 6, name: 'Terapia Facial (Limpeza de Pele)', img: Terapia, path: '/Terapia' },
    { id: 7, name: 'Depilação Nasal', img: DepilacaoNariz, path: '/DepilacaoNas' },
    { id: 8, name: 'Depilação da Orelha', img: DepilacaoOrelha, path: '/DepilacaoOrelha' },
    { id: 9, name: 'Hidratação na Barba', img: HidratacaoBarba, path: '/HidratacaoBarba' },
    { id: 10, name: 'Hidratação', img: Hidratacao, path: '/Hidratacao' },
    { id: 11, name: 'Pigmentação na Barba', img: Pigmentacao, path: '/Pigmentacao' },
    { id: 12, name: 'Selagem', img: Selagem, path: '/Selagem' },
    { id: 13, name: 'Tintura', img: Tintura, path: '/Tintura' },
    { id: 14, name: 'Luzes', img: Luzes, path: '/Luzes' },
    { id: 15, name: 'Platinado', img: Platinado, path: '/Platinado' },
    { id: 16, name: 'Pedicure', img: Pedicure, path: '/Pedicure' },
    { id: 17, name: 'Manicure', img: Manicure, path: '/Manicure' }
  ];

  return (
    <div className="home-container">
      {/* PIX + botão de agendamento abaixo centralizados */}
      <div className="pix-top">
        <AgendamentoPix />
      </div>

      {/* Grid de serviços */}
      <div className="home-content">
        <div className="button-grid">
          {buttons.map(button => (
            <div
              key={button.id}
              className="button-box"
              onClick={() => handleClick(button.path)}
            >
              <img src={button.img} alt={button.name} className="button-image" />
              <p className="button-name">{button.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

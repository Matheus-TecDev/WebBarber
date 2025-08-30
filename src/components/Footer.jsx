import React from 'react';
import '../styles-comp/Footer.css';
import mapa from '../images/mapa.jpeg';

function Footer() {
  return (
    <footer>
      <div className="Footerrrr">
        <div className="redes-sociaissss">
          <h2 className="redessss">Siga-nos nas redes sociais</h2>
          <div className="social-buttons-containerrrr">
            <a href="https://www.instagram.com/flash.barbearia/" target="_blank" rel="noopener noreferrer">
              <button className="social-buttoninstagrammmm"></button>
            </a>
            <a href="https://www.youtube.com/@aeciamoveisbr" target="_blank" rel="noopener noreferrer">
              <button className="social-buttonyoutubeeee"></button>
            </a>
            <a href="https://www.tiktok.com/@flashbarbearia" target="_blank" rel="noopener noreferrer">
              <button className="social-buttontiktokkk"></button>
            </a>
            <a href="https://www.facebook.com/flashbarbearia?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <button className="social-buttonfacebookkk"></button>
            </a>
          </div>

          <div className="whatssss">
            <h2 className="textwppppp">Como Podemos Lhe Ajudar?</h2>
            <a
              href="https://api.whatsapp.com/send?phone=5585986003990&text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="social-buttonwhatsappppp"></button>
            </a>
          </div>
        </div>

        <div className="contatoooo">
          <h1 className="endddd">
            Av. Ministro Albuquerque Lima, 415 - Conj. Ceará, Fortaleza - CE, 60533-695
          </h1>
          <a
            href="https://www.google.com/maps/place/Barbearia+Flash:+Corte,+Barba,+Sobrancelha,+Selagem,+Platinado,+Conjunto+Cear%C3%A1/@-3.7683882,-38.6101777,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74d98bb4ed4f3:0x7aee2b4164610428!8m2!3d-3.7683882!4d-38.6076028!16s%2Fg%2F11rqhrbqr2?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mapa} alt="Google Maps" style={{ width: '250px', height: 'auto', margin: '14px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

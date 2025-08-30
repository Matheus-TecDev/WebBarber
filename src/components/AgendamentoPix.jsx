import React, { useState } from 'react';
import './AgendamentoPix.css';

export default function AgendamentoPix() {
  const [pixKey] = useState("Matheusfmc2005@gmail.com");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pix-top">
      <div className="pix-box">
        <h3>💳 Chave Pix</h3>
        <div className="pix-input-wrapper">
          <input type="text" value={pixKey} readOnly className="pix-key" />
          <button onClick={handleCopy} className="copy-btn">
            <i className="fas fa-copy"></i> Copiar
          </button>
        </div>
        {copied && <p className="copied-msg">✅ Chave copiada com sucesso!</p>}
        <p className="pix-hint">Use esta chave para transferências via Pix adiantadas ou logo após o seu atendimento !</p>
      </div>
    </div>
  );
}

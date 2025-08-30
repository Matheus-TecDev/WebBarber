import React from 'react';
import './Horarios.css'; // Importa o arquivo de estilos CSS para a página

const Horarios = () => {
  return (
    <div className="horarios-container">
      <h1 className="titleh">Nossos Horários de Funcionamento</h1>
      <div className="horarios-section">
        <h2 className="section-titleh">De Segunda a Sexta</h2>
        <p className="section-text">Na nossa barbearia, o foco é sempre atender você da melhor maneira possível, com qualidade e conveniência. Por isso, estamos à disposição de segunda a sexta-feira, das 9h da manhã até às 20h da noite, sem pausa para almoço. Sabemos que o seu tempo é precioso, e queremos garantir que você tenha a flexibilidade de vir até nós no horário que mais lhe convém, seja pela manhã, à tarde ou no fim do dia.</p>
      </div>
      <div className="horarios-section">
        <h2 className="section-titleh">Sábados</h2>
        <p className="section-text">
Aqui está o texto atualizado para os sábados, mantendo o estilo mas com as alterações necessárias:

Horário de Atendimento aos Sábados: Das 9h às 18h (Sem Pausa para Almoço)

Para aqueles que têm a rotina cheia durante a semana ou preferem cuidar do visual no fim de semana, estamos prontos para atender você aos sábados, das 9h da manhã até às 18h, sem pausa para almoço. Nosso compromisso é oferecer conveniência e qualidade sem interrupções, garantindo que, mesmo no sábado, você possa nos visitar no horário que for mais conveniente.</p>
      </div>
      <div className="horarios-section">
        <h2 className="section-titleh">Feriados</h2>
        <p className="section-text">Nos feriados, nossos horários podem variar, e há a possibilidade de que a barbearia esteja fechada em determinados dias. Para evitar qualquer imprevisto, recomendamos fortemente que você verifique nosso perfil no Instagram antes de planejar sua visita.

Sempre atualizamos nossas redes sociais com os horários especiais de atendimento, garantindo que você saiba com antecedência se estaremos abertos ou fechados em um feriado. Assim, você não corre o risco de se deslocar e encontrar a barbearia fechada.

Portanto, fique atento e siga nossa página no Instagram para estar por dentro de todas as atualizações. Dessa forma, você se programa com tranquilidade e aproveita nossos serviços nos dias que estaremos abertos.</p>
      </div>
    </div>
  );
}

export default Horarios;

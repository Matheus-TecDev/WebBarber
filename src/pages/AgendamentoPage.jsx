// src/pages/AgendamentoPage.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import './AgendamentoPage.css';

import { AuthContext } from '../components/AuthProvider';
import { getAgendamentosDoDia, salvarAgendamento, cancelarAgendamento } from '../services/api';

const horariosDisponiveis = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];

// Mapeia para o formato que React-Select espera
const optionsHorarios = horariosDisponiveis.map(h => ({
  value: h,
  label: h
}));

const feriados = ['2025-01-01', '2025-12-25', '2025-11-15'];

export default function AgendamentoPage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  // Redireciona se não estiver logado
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Carrega agendamentos quando data muda
  useEffect(() => {
    if (dataSelecionada) {
      const dataStr = dataSelecionada.toISOString().split('T')[0];
      getAgendamentosDoDia(dataStr).then(setAgendamentos);
    } else {
      setAgendamentos([]);
    }
  }, [dataSelecionada]);

  const isDomingoOuFeriado = (date) => {
    const dataStr = date.toISOString().split('T')[0];
    return date.getDay() === 0 || feriados.includes(dataStr);
  };

  const agendar = async () => {
    if (!dataSelecionada || !horarioSelecionado) {
      return setMensagem({ tipo: 'erro', texto: 'Selecione uma data e horário!' });
    }

    const jaReservado = agendamentos.find(a => a.horario === horarioSelecionado.value);
    if (jaReservado) {
      return setMensagem({ tipo: 'erro', texto: 'Horário já reservado!' });
    }

    try {
      await salvarAgendamento({
        nome: user.nome,
        data: dataSelecionada.toISOString().split('T')[0],
        horario: horarioSelecionado.value,
      });
      setMensagem({ tipo: 'sucesso', texto: 'Agendamento realizado com sucesso!' });

      const novaLista = await getAgendamentosDoDia(dataSelecionada.toISOString().split('T')[0]);
      setAgendamentos(novaLista);
      setHorarioSelecionado(null);
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: 'Erro ao agendar. Tente novamente.' });
    }
  };

  const cancelar = async (agendamento) => {
    const podeCancelar = user.isAdmin || agendamento.nome === user.nome;
    if (!podeCancelar) return;

    try {
      await cancelarAgendamento(agendamento.id);
      const novaLista = await getAgendamentosDoDia(dataSelecionada.toISOString().split('T')[0]);
      setAgendamentos(novaLista);
      setMensagem({ tipo: 'sucesso', texto: 'Agendamento cancelado!' });
    } catch {
      setMensagem({ tipo: 'erro', texto: 'Erro ao cancelar o agendamento.' });
    }
  };

  return (
    <div className="agendamento-boxxxx">
      <h2>Agendar Horário</h2>

      {/* Container flex para DatePicker, React-Select e botão */}
      <div className="agendamento-form">
        {/* DatePicker */}
        <DatePicker
          selected={dataSelecionada}
          onChange={setDataSelecionada}
          filterDate={(date) => !isDomingoOuFeriado(date)}
          placeholderText="Selecione uma data"
          className="datepickerxxx"
        />

        {/* React-Select para horários */}
        <Select
          options={optionsHorarios}
          value={horarioSelecionado}
          onChange={setHorarioSelecionado}
          placeholder="Horários disponíveis"
          className="selecthorarioxxx"
          classNamePrefix="react-select"
          isSearchable={false}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          menuPlacement="auto"
          menuPortalTarget={document.body}  // força o dropdown a renderizar no body, evitando corte
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderColor: state.isFocused ? '#b3001b' : '#ccc',
              boxShadow: state.isFocused ? '0 0 0 3px rgba(230, 0, 35, 0.15)' : 'none',
              '&:hover': { borderColor: '#b3001b' },
              minHeight: '44px',
              borderRadius: '8px',
            }),
            placeholder: (provided) => ({
              ...provided,
              color: '#888',
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused
                ? 'rgba(230, 0, 35, 0.1)'
                : state.isSelected
                ? 'rgba(230, 0, 35, 0.2)'
                : '#fff',
              color: '#333',
              cursor: state.isDisabled ? 'not-allowed' : 'pointer',
              '&:active': {
                backgroundColor: '#e60023',
                color: '#fff',
              },
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(230, 0, 35, 0.15)',
            }),
            menuList: (provided) => ({
              ...provided,
              maxHeight: '180px',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: '#111',
            }),
            indicatorSeparator: () => ({ display: 'none' }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: state.isFocused ? '#b3001b' : '#888',
              '&:hover': { color: '#b3001b' },
            }),
          }}
        />

        {/* Botão Agendar */}
        <button className="btn-agendarxxx" onClick={agendar}>
          Agendar
        </button>
      </div>

      {mensagem.texto && (
        <div className={`mensagemxxx ${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}

      {dataSelecionada && (
        <div className="agendamentos-listaxxx">
          <h3>Agendamentos do dia</h3>
          <ul>
            {agendamentos.map((a, i) => (
              <li key={i}>
                <span>
                  {a.horario} –{' '}
                  {user.isAdmin
                    ? a.nome
                    : a.nome === user.nome
                    ? a.nome
                    : 'Reservado 🔒'}
                </span>
                {(user.isAdmin || a.nome === user.nome) && (
                  <button
                    onClick={() => cancelar(a)}
                    className="btn-cancelarxxx"
                  >
                    Cancelar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

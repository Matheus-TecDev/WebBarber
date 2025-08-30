import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Altere conforme o endereço da sua API
});

// Busca agendamentos por data (ex: "2025-05-27")
export async function getAgendamentosDoDia(data) {
  const response = await api.get(`/agendamentos/${data}`);
  return response.data;
}

// Salva um novo agendamento
export async function salvarAgendamento({ nome, data, horario }) {
  const response = await api.post('/agendamentos', {
    nome,
    data,
    horario,
  });
  return response.data;
}

// Cancela um agendamento
export async function cancelarAgendamento(id) {
  const response = await api.delete(`/agendamentos/${id}`);
  return response.data;
}

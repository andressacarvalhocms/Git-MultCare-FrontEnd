import { http } from './config';

export default {
  listar: () => {
    return http.get('medicamentoUsuario/');
  },

  salvar: (medicamento) => {
    return http.post('medicamento/', medicamento);
  },

  atualizar: (medicamento) => {
    return http.put('medicamento/', medicamento);
  },

  apagar: (medicamento) => {
    return http.delete('medicamento/', { data: medicamento });
  }
};

import { http } from './config';

export default {
  listarTodos: () => {
    return http.get('obterListaSintomaTriagem');
  },

  listar: () => {
    return http.get('questionarioTriagemPorUsuario/');
  },

  salvar: (questionarioTriagem) => {
    return http.post('realizarClassificaoRecomendacao/', questionarioTriagem);
  },

  atualizar: (questionarioTriagem) => {
    return http.put('questionarioTriagem/', questionarioTriagem);
  },

  apagar: (questionarioTriagem) => {
    return http.delete('questionarioTriagem/', { data: questionarioTriagem });
  }

};

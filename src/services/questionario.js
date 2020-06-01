import { http } from './config'

export default {
  listar: () => {
    return http.get('alergiaPorUsuario/');
  },

  salvar: (alergia) => {
    return http.post('alergia/', alergia);
  },

  atualizar: (alergia) => {
    return http.put('alergia/', alergia);
  },

  apagar: (alergia) => {
    return http.delete('alergia/', { data: alergia });
  }

};

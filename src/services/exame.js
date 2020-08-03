import { http } from './config';

export default {
  listar: () => {
    return http.get('examesUsuario');
  },

  salvar: (exame) => {
    return http.post('exames', exame);
  },

  salvarXml: (file) => {
  var config = {
    headers: {'Content-Type': 'application/xml'}
  };
    return http.post('exames/xml', file, config);
  },

  atualizar: (exame) => {
    return http.put('exames', exame);
  },

  apagar: (exame) => {
    return http.delete('exames', { data: exame });
  },

  obterExamesCadastrados: () => {
    return http.get('exames-cadastrados');
  },
};

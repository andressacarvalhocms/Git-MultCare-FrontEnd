import { http } from './config'

export default {
  listar: () => {
    return http.get('questionarioCovidPorUsuario/');
  }, 

  salvar: (questionarioCovid) => {
    return http.post('questionarioCovid/', questionarioCovid);
  },

  atualizar: (questionarioCovid) => {
    return http.put('questionarioCovid/', questionarioCovid);
  },

  apagar: (questionarioCovid) => {
    return http.delete('questionarioCovid/', { data: questionarioCovid });
  }

};

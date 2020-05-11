import { http } from './config';

export default {
  realizarAnalise: () => {
    return http.get('analise/realizar');
  },
  obterAnalises: () => {
    return http.get('analise/obter-analises');
  },
};

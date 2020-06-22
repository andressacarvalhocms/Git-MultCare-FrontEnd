import { http } from './config';

export default {
  realizarAnalise: (monitoramento) => {
    return http.post('monitoramento/realizar', monitoramento);
  },
  obterAnalises: () => {
    return http.get('analise/obter-analises');
  },
};

import { http } from './config';

export default {
  realizarAnalise: () => {
    return http.get('analise/realizarMonitoramento');
  },
  obterAnalises: () => {
    return http.get('analise/obter-analises');
  },
};

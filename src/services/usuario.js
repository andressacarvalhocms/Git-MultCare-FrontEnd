import { http } from './config';

export default {
  cadastrar: (usuario) => {
    return http.post('usuario/cadastrar/', usuario);
  }
};

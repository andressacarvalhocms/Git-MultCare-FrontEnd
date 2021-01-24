import axios from 'axios';

const API_URL = 'http://localhost:8081/api/';
//const API_URL = 'https://multcarepaciente-triagem-back.herokuapp.com/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.jwt) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'usuario/cadastrar', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();

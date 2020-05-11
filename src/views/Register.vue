<template>
  <BaseLayout @submit="onSubmit">
    <h4>
      Cadastro de usuário
    </h4>

    <b-form-group
      id="input-group-11"
      label="Nome completo:"
      label-for="input-11"
    >
      <b-form-input
        id="input-11"
        v-model="fullname"
        type="text"
        required
        autofocus
        placeholder="Digite seu nome completo"
      />
    </b-form-group>

    <b-form-group
      id="input-group-13"
      label="Sexo:"
      label-for="input-13"
    >
      <b-form-radio
        v-model="genre"
        name="genre-radios"
        value="M"
        checked
      >
        Masculino
      </b-form-radio>
      <b-form-radio
        v-model="genre"
        name="genre-radios"
        value="F"
      >
        Feminino
      </b-form-radio>
    </b-form-group>

    <b-form-group
      id="input-group-14"
      label="Diabético:"
      label-for="input-14"
    >
      <b-form-radio
        v-model="dm"
        name="dm-radios"
        value="F"
        checked
      >
        Não
      </b-form-radio>
      <b-form-radio
        v-model="dm"
        name="dm-radios"
        value="T"
      >
        Sim
      </b-form-radio>
    </b-form-group>

    <b-form-group
      id="input-group-15"
      label="Hipertenso:"
      label-for="input-15"
    >
      <b-form-radio
        v-model="has"
        name="has-radios"
        value="F"
        checked
      >
        Não
      </b-form-radio>
      <b-form-radio
        v-model="has"
        name="has-radios"
        value="T"
      >
        Sim
      </b-form-radio>
    </b-form-group>

    <b-form-group
      id="input-group-12"
      label="Idade:"
      label-for="input-12"
    >
      <b-form-input
        id="input-12"
        v-model="age"
        type="number"
        required
        placeholder="Digite sua idade"
      />
    </b-form-group>

    <b-form-group
      id="input-group-p12"
      label="Peso:"
      label-for="input-p12"
    >
      <b-form-input
        id="input-p12"
        v-model="weight"
        type="number"
        required
        placeholder="Digite seu peso"
      />
    </b-form-group>

    <b-form-group
      id="input-group-1"
      label="Email:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="username"
        type="email"
        required
        placeholder="Digite seu email"
      />
    </b-form-group>

    <b-form-group
      id="input-group-s"
      label="Senha:"
      label-for="input-s"
    >
      <b-form-input
        id="input-s"
        v-model="password"
        type="password"
        required
        placeholder="Digite sua senha"
      />
    </b-form-group>

    <b-form-group
      id="input-group-s1"
      label="Confirmação de senha:"
      label-for="input-s1"
    >
      <b-form-input
        id="input-s1"
        v-model="passwordConfirm"
        type="password"
        required
        placeholder="Digite sua senha novamente"
      />
    </b-form-group>

    <b-form-group>
      <b-button
        variant="primary"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        v-bind:disabled="password ==='' || password !== passwordConfirm"
      >
        Cadastrar
      </b-button>
    </b-form-group>

    <p class="mt-5 mb-3 text-muted text-center">
      Já tem conta? <a href="#/login">Faça login agora!</a>
    </p>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayoutLogin.vue';
import Usuario from '../services/usuario';

export default {
  name: 'Historico',
  components: {
    BaseLayout
  },
  data: () => ({
    fullname: '',
    age: '',
    genre: 'M',
    username: '',
    password: '',
    weight: '',
    passwordConfirm: '',
    dm: 'F',
    has: 'F',
  }),
  methods: {
    onSubmit(evt) {
      this.salvarCadastro();
    },

    salvarCadastro() {
      const body = {
        nome: this.fullname,
        idade: this.age,
        senha: this.password,
        sexo: this.genre,
        login: this.username,
        peso: this.weight,
        diabetico: this.dm,
        hipertenso: this.has
      };
      Usuario.cadastrar(body).then(resposta => {
        alert(resposta.data);
        this.errors = [];
        this.$router.push({ name: 'login' });
      }).catch(e => {
        this.errors = e.response.data.errors;
      });
    }
  }
};
</script>

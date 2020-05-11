<template>
  <BaseLayout @submit="handleLogin">
    <b-form-group
      id="input-group-1"
      label="Email:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="user.username"
        v-validate="'required'"
        type="email"
        name="username"
        autofocus
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
        v-model="user.password"
        v-validate="'required'"
        type="password"
        name="password"
        placeholder="Digite sua senha"
      />
    </b-form-group>

    <b-form-group>
      <b-button
        variant="primary"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Entrar
      </b-button>
    </b-form-group>

    <p class="mt-5 mb-3 text-muted text-center">
      Ainda não tem cadastro? <a href="#/register">Crie sua conta agora!</a>
    </p>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayoutLogin.vue';
import User from '../models/user';

export default {
  name: 'Historico',
  components: {
    BaseLayout
  },
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: 'home' });
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push({ name: 'home' });
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

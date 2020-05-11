<template>
  <div class="base-layout">
    <b-navbar
      toggleable="md"
      class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <b-navbar-brand
        class="navbar-brand col-sm-3 col-md-2 mr-0 text-center"
        href="#"
      >
        <div style="padding:5px">
          MultCare
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <a slot="button-content">{{ currentUser.nome }}</a>
            <b-dropdown-item @click="logOut">
              Sair
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container-fluid">
      <div class="row">
        <b-nav
          vertical
          class="col-md-2 d-none d-md-block bg-light sidebar"
        >
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Menu</span>
            </h6>

            <ul class="nav flex-column">
              <b-nav-item
                :active="activemenu == 1"
                @click="$router.push({ name:'home' })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                ><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Resumo de análise clínica
              </b-nav-item>
              <b-nav-item
                :active="activemenu == 2"
                @click="$router.push({ name:'medicamentos' })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
                  cx="9"
                  cy="7"
                  r="4"
                /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Medicamentos
              </b-nav-item>
              <b-nav-item
                :active="activemenu == 3"
                @click="$router.push({ name:'alergias' })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
                  cx="9"
                  cy="7"
                  r="4"
                /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Alergias
              </b-nav-item>
              <b-nav-item
                :active="activemenu == 4"
                @click="$router.push({ name:'exames' })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
                  cx="9"
                  cy="7"
                  r="4"
                /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Exames
              </b-nav-item>
<!--              <b-nav-item-->
<!--                :active="activemenu == 5"-->
<!--                @click="$router.push({ name:'historico' })"-->
<!--              >-->
<!--                <svg-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  width="24"-->
<!--                  height="24"-->
<!--                  viewBox="0 0 24 24"-->
<!--                  fill="none"-->
<!--                  stroke="currentColor"-->
<!--                  stroke-width="2"-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  class="feather feather-layers"-->
<!--                ><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>-->
<!--                Histórico de análises-->
<!--              </b-nav-item>-->

<!--               <b-nav-item-->
<!--                :active="activemenu == 6"-->
<!--                @click="$router.push({ name:'monitoramento' })"-->
<!--              >-->
<!--                <svg-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  width="24"-->
<!--                  height="24"-->
<!--                  viewBox="0 0 24 24"-->
<!--                  fill="none"-->
<!--                  stroke="currentColor"-->
<!--                  stroke-width="2"-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  class="feather feather-layers"-->
<!--                ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle-->
<!--                  cx="9"-->
<!--                  cy="7"-->
<!--                  r="4"-->
<!--                /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>-->
<!--                Monitoramento de fatores de risco-->
<!--              </b-nav-item>-->

              <b-nav-item
                :active="activemenu == 7"
                @click="$router.push({ name:'classificacao' })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-layers"
                ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
                  cx="9"
                  cy="7"
                  r="4"
                /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                Classificação de risco
              </b-nav-item>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Médico responsável</span>
            </h6>

            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <span
                  target="_self"
                  class="nav-link"
                >
                  {{ doctor }}
                </span>
              </li>
            </ul>
          </div>
        </b-nav>

        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-4"
        >
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  props: {
    doctor: {
      type: String,
      default: 'Dr. Fulano',
      required: false
    },
    activemenu: {
      type: String,
      default: '1',
      required: false
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data: () => ({
    drd: 'Dr. Fulano de Tal 2'
  }),
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'logout' });
    }
  }
};
</script>

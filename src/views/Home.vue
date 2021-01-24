<template>
  <BaseLayout activemenu="1">
    <b-alert v-model="showDismissibleAlert" dismissible
             @dismissed="msgAlert = ''">
      {{msgAlert}}
    </b-alert>
    <BaseContentTitle icon="tachometer-alt">
      Exames Atuais
    </BaseContentTitle>

    <b-row>
      <DashboardCard
        title="Creatinine"
        v-bind:success="examesCadastrados.creatinina"
      />
  <!--    <DashboardCard
        title="Ureia"
        v-bind:success="examesCadastrados.ureia"
      /> -->
      <DashboardCard
        title="Albuminúria"
        v-bind:success="examesCadastrados.microalbuminuria"
      />
      <DashboardCard
        title="Glomerular Filtration Rate(GFR)"
        v-bind:success="examesCadastrados.tfg"
      />
    </b-row>
    <b-modal
      id="modal-analise"
      size="sm"
      centered
      no-close-on-backdrop
      no-close-on-esc
      hide-header
      hide-footer
      @show="startAnalise"
    >
      <div
        v-if="sanalisando"
        class="d-flex align-items-center"
      >
        <b-spinner type="grow" />
        <div class="ml-3">
          <strong>Realizando análise</strong><br>
          Por favor, aguarde um instante...
        </div>
      </div>
    </b-modal>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';
import DashboardCard from '@/components/DashboardCard.vue';
import Exame from '../services/exame';
import Analise from '../services/analise';
export default {

  name: 'Home',
  components: {
    BaseLayout,
    BaseContentTitle,
    DashboardCard
  },
  data() {
    return {
      sanalisando: true,
      examesCadastrados: [],
      showDismissibleAlert: false,
      msgAlert: ''
    };
  },

  mounted() {
    this.obterExamesCadastradosUsuario();
  },
  methods: {
    startAnalise(evt) {
      this.msgAlert = '';
      this.showDismissibleAlert = false;
      Analise.realizarAnalise().then(resposta => {
        this.msgAlert = 'Resultado da Análise: ' + resposta.data.classificacao;
      });
      setTimeout(() => {
        this.$bvModal.hide('modal-analise');
        this.showDismissibleAlert = true;
      }, 2000);
    },

    obterExamesCadastradosUsuario() {
      Exame.obterExamesCadastrados().then(resposta => {
        this.examesCadastrados = resposta.data;
      });
    }
  }
};
</script>

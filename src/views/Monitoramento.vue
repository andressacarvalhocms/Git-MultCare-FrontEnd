
<template>
  <BaseLayout activemenu="6">
    <BaseContentTitle icon="stethoscope">
      Monitoramento
      <template v-slot:toolbar>
      </template>
    </BaseContentTitle>
    <b-alert v-model="showDismissibleAlert" dismissible
             @dismissed="msgAlert = ''">
      {{msgAlert}}
    </b-alert>


      <form
        ref="form"
        @submit.prevent="salvar"
      >
        <b-form-group
          label="Nome"
          label-for="inp-nome"
        >
          <select class="form-control" id="inp-nome" v-model="exame.nome"
                  :options="form.nome_options"
                  required
                  @input="onChangeExame">
            <option value="Pressão Arterial">Pressão Arterial, und_medida: 'mmHg' </option>
            <option value="Glicemia de jejum">Glicemia de jejum, und_medida: 'mg/dL'</option>
            <option value="Glicemia pré-prandial">Glicemia pré-prandial, und_medida: 'mg/dL'</option>
            <option value="Glicemia pós-prandial">Glicemia pós-prandial, und_medida: 'mg/dL'</option>
          </select>
        </b-form-group>

        <b-form-group
          :label="'Valor (' + form.und_medida + ')'"
          label-for="inp-valor"
        >
          <input type="text" placeholder="Resultado"  id="inp-valor"
                 v-model="exame.resultado"
                 required class="form-control">
        </b-form-group>
        <b-form-group
          :label="'Data do Exame'"
          label-for="inp-dataCadastro"
        >
          <input type="date" placeholder="Resultado"  id="inp-dataCadastro"
                 v-model="exame.dataCadastro"
                 required class="form-control">
        </b-form-group>

        <button
            v-b-modal="'modal-analise'"
            size="sm"
            variant="outline-secondary"
            type="submit" class="btn btn-primary" style="margin: 0 15px;">
          Confirmar
        </button>

      </form>

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
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';
import DashboardCard from '@/components/DashboardCard.vue';
import Exame from '../services/exame';
import Analise from '../services/monitoramento';
//import QuestionarioCovid from '../services/questionarioCovid';

export default {

  name: 'Exames',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
      sanalisando: true,
      examesCadastrados: [],
      showDismissibleAlert: false,
      msgAlert: '',

      exame: {
        id: '',
        nome: '',
        resultado: '',
        dataCadastro: ''
      },
      exames: [],
      form: {
        exame: null,
        valor: ''

      }
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    startAnalise(evt) {
      this.msgAlert = '';
      this.showDismissibleAlert = false;
      Analise.realizarAnalise(this.exame).then(resposta => {
        this.msgAlert = 'Resultado da Análise: ' + resposta.data;
      });
      setTimeout(() => {
        this.$bvModal.hide('modal-analise');
        this.showDismissibleAlert = true;
      }, 2000);
    },

    listar() {
      Exame.listar().then(resposta => this.exames = resposta.data);
    },

    salvar() {


    },

    editar(exame) {
      this.exame = exame;
    },

    remover(exame) {
      if (confirm('Deseja excluir o exame?')) {
        Exame.apagar(exame).then(resposta => {
          this.listar();
          this.errors = [];
        }).catch(e => {
          this.errors = e.response.data.errors;
        });
      }
    },

    onChangeExame(data) {
      if (data) {
        this.form.und_medida = data.und_medida;
      } else {
        this.form.und_medida = '-';
      }
    },
    checkFormValidity() {
      return this.$refs.form.checkValidity();
    },
    resetModal() {
      this.form.exame = null;
      this.form.valor = '';
    },
    handleSave(evt) {
      evt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      if (this.form.exame) {
        this.items.push({
          nome: this.form.exame.nome,
          valor: this.form.valor + ' ' + this.form.exame.und_medida,
          data_cadastro: this.form.data_cadastro
        });
      }
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

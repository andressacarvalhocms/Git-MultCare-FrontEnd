
<template>
  <BaseLayout activemenu="4">
    <BaseContentTitle icon="stethoscope">
      Exames
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-adicionar-exame'"
          size="sm"
          variant="outline-secondary"
        >
          <font-awesome-icon icon="plus" /> Adicionar exame
        </b-button>
      </template>
    </BaseContentTitle>

    <div class="table-responsive">

    <table class="table striped">
      <thead class="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Resultado</th>
          <th scope="col">Data Cadastro</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="exame of exames" :key="exame.id">
          <td>{{ exame.id}} </td>
          <td>{{ exame.nome}} </td>
          <td>{{ exame.resultado }}</td>
          <td>{{ exame.dataCadastro }}</td>
          <td>
              <b-button
                v-b-modal="'modal-adicionar-exame'"
                size="sm"
                variant="outline-secondary"
                @click="editar(exame)"
              >
                <i class='fas fa-pen'></i>
              </b-button>

              <b-button
                size="sm"
                variant="outline-secondary"
                @click="remover(exame)"
              >
                <i class='fas fa-trash'></i>
              </b-button>
          </td>
        </tr>
      </tbody>
</table>
    </div>
    <b-modal
      id="modal-adicionar-exame"
      ref="modal"
      size="md"
      title="Exame"
      @show="resetModal"
      @ok="handleSave"
    >
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
            <option value="creatinina">Creatinina, und_medida: 'mg/dL'</option>
            <option value="Uréia">Uréia, und_medida: 'mg/dL' </option>
            <option value="Albuminúria">Albuminúria, und_medida: 'mg/dL' </option>
            <option value="Albumina">Albumina, und_medida: 'mg/dL' </option>
            <option value="Potássio">Potássio, und_medida: 'mEq/L'</option>
            <option value="TFG">TFG, und_medida: 'mL/min/1,73 m²'</option>
            <option value="Microalbuminúria">Microalbuminúria, und_medida: 'mmHg'</option>
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

        <button type="submit" class="btn btn-primary" style="margin: 0 15px;"> Confirmar</button>

        <button type="reset" class="btn btn-danger" onClick="window.location.reload()"> Cancelar</button>
      </form>
    </b-modal>
  </BaseLayout>
</template>

<script>
import Exame from '../services/exame';

// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {

  name: 'Exames',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
      exame: {
        id: '',
        nome: '',
        resultado: '',
        dataCadastro: ''
      },
      exames: [],
      form: {
        exame: null,
        valor: '',
        data_cadastro: '03/04/2019',
        nome_options: [
          { value: null, text: '-- Selecione --', disabled: true },
          { value: { nome: 'Pressão Arterial', und_medida: 'mmHg' }, text: 'Pressão Arterial' },
          { value: { nome: 'Creatinina', und_medida: 'mg/dL' }, text: 'Creatinina' },
          { value: { nome: 'Uréia', und_medida: 'mg/dL' }, text: 'Uréia' },
          { value: { nome: 'Albuminúria', und_medida: 'mg/dL' }, text: 'Albuminúria' },
          { value: { nome: 'Potássio', und_medida: 'mEq/L' }, text: 'Potássio' },
          { value: { nome: 'Taxa de Filtração Glomerular (TFG)', und_medida: 'mL/min/1,73 m²' }, text: 'Taxa de Filtração Glomerular (TFG)' },
          { value: { nome: 'Microalbuminúria', und_medida: 'mmHg' }, text: 'Microalbuminúria' },
          { value: { nome: 'Glicemia de jejum', und_medida: 'mg/dL' }, text: 'Glicemia de jejum' },
          { value: { nome: 'Glicemia pré-prandial', und_medida: 'mg/dL' }, text: 'Glicemia pré-prandial' },
          { value: { nome: 'Glicemia pós-prandial', und_medida: 'mg/dL' }, text: 'Glicemia pós-prandial' }
        ]
      }
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      Exame.listar().then(resposta => this.exames = resposta.data);
    },

    salvar() {
      if (!this.exame.id) {
        Exame.salvar(this.exame).then(resposta => {
          this.exame = {};
          alert('Salvo com sucesso!');
          window.location.reload();
          this.listar();
          this.errors = [];
        }).catch(e => {
          this.errors = e.response.data.errors;
        });
      } else {
        Exame.salvar(this.exame).then(resposta => {
          this.exame = {};
          alert('Atualizado com sucesso!');
          window.location.reload();
          this.listar();
          this.errors = [];
        }).catch(e => {
          this.errors = e.response.data.errors;
        });
      }
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

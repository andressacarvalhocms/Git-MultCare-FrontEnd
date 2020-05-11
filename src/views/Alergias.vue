<template>
  <BaseLayout activemenu="3">
    <BaseContentTitle icon="notes-medical">
      Alergias
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-adicionar-alergia'"
          size="sm"
          variant="outline-secondary"
        >
          <font-awesome-icon icon="plus" /> Adicionar alergia
        </b-button>
      </template>
    </BaseContentTitle>

    <div class="table-responsive">


    <table class="table striped">
      <thead class="thead-light">
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Gravidade</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alergia of alergias" :key="alergia.id">
          <td>{{ alergia.id}} </td>
          <td>{{ alergia.nome}} </td>
          <td>{{ alergia.gravidade }}</td>
          <td>
              <b-button
                v-b-modal="'modal-adicionar-alergia'"
                size="sm"
                variant="outline-secondary"
                @click="editar(alergia)"
              >
                <i class='fas fa-pen'></i>
              </b-button>

              <b-button
                size="sm"
                variant="outline-secondary"
                @click="remover(alergia)"
              >
                <i class='fas fa-trash'></i>
              </b-button>
          </td>
        </tr>
      </tbody>
</table>


    </div>

    <b-modal
      id="modal-adicionar-alergia"
      ref="modal"
      size="md"
      title="Alergia"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleSave"
    >
      <form
        ref="form"
        @submit.prevent="salvar"
      >
        <b-form-group
          label="Nome"
          label-for="inp-nome"
          invalid-feedback="Nome é obrigatório"
        >

      <input type="text" placeholder="Nome"  id="inp-nome"
            v-model="alergia.nome"
            required class="form-control">
        </b-form-group>

        <b-form-group
          label="Gravidade"
          label-for="inp-gravidade"
          invalid-feedback="Nome é obrigatório"
        >

      <input type="text" placeholder="Gravidade"  id="inp-gravidade"
            v-model="alergia.gravidade"
            required class="form-control">
        </b-form-group>


        <button type="submit" class="btn btn-primary" style="margin: 0 15px;"> Confirmar</button>

        <button type="reset" class="btn btn-danger" onClick="window.location.reload()"> Cancelar</button>


      </form>


    </b-modal>
  </BaseLayout>
</template>

<script>
import Alergia from '../services/alergia'
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {
    mounted(){
    this.listar()
  },

  name: 'Alergias',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {

         alergia:{
          id: '',
          nome: '',
          gravidade: '',
          dataCadastro:  ''
         },
         alergias: [],


      fields: [
        {
          key: 'nome',
          sortable: true
        },
        {
          key: 'data_cadastro',
          sortable: true
        }
      ],
      items: [
        { nome: 'Morfina', data_cadastro: '03/04/2019' },
      ],
      form: {
        nome: '',
        gravidade: '',
        data_cadastro: '03/04/2019'
      }
    };
  },
  methods: {
    listar(){
      Alergia.listar().then(resposta => {
          this.alergias = resposta.data
        })
    },


    salvar(){

      if (!this.alergia.id){
          Alergia.salvar(this.alergia).then(resposta => {
            this.alergia = {}
            alert('Salvo com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }else{
          Alergia.salvar(this.alergia).then(resposta => {
            this.alergia = {}
            alert('Atualizado com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    editar(alergia){
      this.alergia = alergia
    },

    remover(alergia){
      if(confirm('Deseja excluir a alergia?')){
        Alergia.apagar(alergia).then(resposta => {
          this.listar();
          this.errors = []
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },


    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    resetModal() {
      this.form.nome = '';
      this.form.gravidade = '';
    },
    handleSave(evt) {
      evt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.items.push({
        nome: this.form.nome,
        data_cadastro: this.form.data_cadastro
      });
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

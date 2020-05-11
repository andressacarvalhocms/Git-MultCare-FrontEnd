<template>
  <BaseLayout activemenu="2">
    <BaseContentTitle icon="capsules">
      Medicamentos
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-adicionar-medicamentos'"
          size="sm"
          variant="outline-secondary"
        >
          <font-awesome-icon icon="plus" /> Adicionar medicamento
        </b-button>
      </template>
    </BaseContentTitle>

    <div class="table-responsive">


    <table class="table striped">
      <thead class="thead-light">
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Tipo</th>
          <th scope="col">Hora</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medicamento of medicamentos" :key="medicamento.id">
          <td>{{ medicamento.id}} </td>
          <td>{{ medicamento.nome}} </td>
          <td>{{ medicamento.tipo }}</td>
          <td>{{ medicamento.hora }}</td>
          <td>
              <b-button
                v-b-modal="'modal-adicionar-medicamentos'"
                size="sm"
                variant="outline-secondary"
                @click="editar(medicamento)"
              >
                <i class='fas fa-pen'></i>
              </b-button>

              <b-button
                size="sm"
                variant="outline-secondary"
                @click="remover(medicamento)"
              >
                <i class='fas fa-trash'></i>
              </b-button>
          </td>
        </tr>
      </tbody>
</table>




    </div>

    <b-modal
      id="modal-adicionar-medicamentos"
      ref="modal"
      size="md"
      title="Medicamento"
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
          <b-form-input
            id="inp-nome"
            v-model="medicamento.nome"
            type="text"
            required
          />
        </b-form-group>

        <b-form-group
          label="Data Inicial"
          label-for="inp-data_inicial"
          invalid-feedback="Data Inicial é obrigatória"
        >
          <b-form-input
            id="inp-data_inicial"
            v-model="medicamento.dataInicial"
            type="date"
            required
          />
        </b-form-group>

        <b-form-group
          label="Data Final"
          label-for="inp-data_final"
        >
          <b-form-input
            id="inp-data_final"
            v-model="medicamento.dataFinal"
            type="date"
            required
          />
        </b-form-group>

        <b-form-group
          label="Hora"
          label-for="inp-hora"
        >
          <b-form-input
            id="inp-hora"
            v-model="medicamento.hora"
            type="time"
            required
          />
        </b-form-group>

        <b-form-group
          label="Tipo"
          label-for="inp-tipo"
        >
          <b-form-input
            id="inp-tipo"
            v-model="medicamento.tipo"
            type="text"
            required
          />
        </b-form-group>

        <b-form-group
          label="Quantidade Diária"
          label-for="inp-quantidade_diaria"
        >
          <b-form-input
            id="inp-quantidade_diaria"
            v-model="medicamento.quantidadeDiaria"
            type="number"
            required
          />
        </b-form-group>

        <b-form-group
          label="Frequencia Diária"
          label-for="inp-frequencia"
        >
          <b-form-select v-model="medicamento.frequencia">
            <option value="4">
              6 em 6 horas
            </option>
            <option value="3">
              8 em 8 horas
            </option>
            <option value="2">
              12 em 12 horas
            </option>
            <option value="1">
              Uma vez ao dia
            </option>
          </b-form-select>
        </b-form-group>

        <b-form-group
          label="Quantidade Total"
          label-for="inp-total_medicamento"
        >
          <b-form-input
            id="inp-total_medicamento"
            v-model="medicamento.totalMedicamento"
            type="number"
            required
          />
        </b-form-group>

        <button type="submit" class="btn btn-primary" style="margin: 0 15px;"> Confirmar</button>

        <button type="reset" class="btn btn-danger" onClick="window.location.reload()"> Cancelar</button>


      </form>


    </b-modal>
  </BaseLayout>
</template>

<script>
import Medicamento from '../services/medicamento'

// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';
import medicamento from '../services/medicamento';

export default {

  mounted(){
    this.listar()
  },
  name: 'Medicamentos',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
         medicamento:{
          id: '',
          nome: '',
          hora: '',
          dataInicial: '',
          dataFinal: '',
          quantidadeDiaria: '',
          totalMedicamento: '',
          frequencia: '',
          tipo: '',
          status: '',
          dataCadastro: ''
         },
         medicamentos: [],


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
        { nome: 'Insulina', data_cadastro: '03/04/2019' },
        { nome: 'Dorflex', data_cadastro: '03/04/2019' },
        { nome: 'Dipirona', data_cadastro: '03/04/2019' },
        { nome: 'Paracetamol', data_cadastro: '03/04/2019' }
      ],
      form: {
        nome: '',
        hora: '',
        data_inicial: '',
        data_final: '',
        quantidade_diaria: 0,
        total_medicamento: 0,
        frequencia: 1,
        tipo: '',
        status: '',
        data_cadastro: '03/04/2019'
      }
    };
  },
  methods: {
    listar(){
      Medicamento.listar().then(resposta => {
          this.medicamentos = resposta.data
        })
    },

    salvar(){

      if (!this.medicamento.id){
          Medicamento.salvar(this.medicamento).then(resposta => {
            this.medicamento = {}
            alert('Salvo com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }else{
          Medicamento.salvar(this.medicamento).then(resposta => {
            this.medicamento = {}
            alert('Atualizado com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    editar(medicamento){
      this.medicamento = medicamento
    },

    remover(medicamento){
      if(confirm('Deseja excluir o medicamento?')){
        Medicamento.apagar(medicamento).then(resposta => {
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
      this.form.data_inicial = '';
      this.form.data_final = '';
      this.form.hora = '';
      this.form.tipo = '';
      this.form.quantidade_diaria = 0;
      this.form.total_medicamento = 0;
      this.form.frequencia = 1;
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

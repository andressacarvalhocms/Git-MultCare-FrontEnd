<template>
  <BaseLayout activemenu="3">
    <BaseContentTitle icon="notes-medical">
      Questionario Covid
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-adicionar-covid'"
          size="sm"
          variant="outline-secondary"
        >
          <font-awesome-icon icon="plus" /> Responder Questionário
        </b-button>
      </template>
    </BaseContentTitle>

    <div class="table-responsive">


    <table class="table striped">
      <thead class="thead-light">
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Sexo</th>
          <th scope="col">Temperatura</th>
          <th scope="col">Tipo Sanguíneo</th>
          <th scope="col">Data Cadastro</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="questionarioCovid of questionariosCovid" :key="questionarioCovid.id">
          <td>{{ questionarioCovid.id}} </td>
          <td>{{ questionarioCovid.sexo}} </td>
          <td>{{ questionarioCovid.temperatura}} </td>
          <td>{{ questionarioCovid.tipoSanguineo}} </td>
          <td>{{ questionarioCovid.dataCadastro }}</td>
          <td>
              <b-button
                v-b-modal="'modal-adicionar-covid'"
                size="sm"
                variant="outline-secondary"
                @click="editar(questionarioCovid)"
              >
                <i class='fas fa-pen'></i>
              </b-button>

              <b-button
                size="sm"
                variant="outline-secondary"
                @click="remover(questionarioCovid)"
              >
                <i class='fas fa-trash'></i>
              </b-button>
          </td>
        </tr>
      </tbody>
</table>


    </div>

    <b-modal
      id="modal-adicionar-covid"
      ref="modal"
      size="md"
      title="Questionario Covid"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleSave"
    >
      <form
        ref="form"
        @submit.prevent="salvar"
      >

        <b-form-group
                label="Qual a sua temperatura corporal agora?"
                label-for="inp-temperatura"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.temperatura"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Normal [ Até 37,7 °C ]">Normal [ Até 37,7 °C ] </option>
                    <option value="Febre [ Entre 37,8 °C e 39°C ]">Febre [ Entre 37,8 °C e 39°C ]</option>
                    <option value="Febre alta [Acima de 39 °C ]">Febre alta [Acima de 39 °C ]</option>
                </select>
        </b-form-group>


        <b-form-group
                label="Você está tendo algum desses sintomas ou sinais abaixo (marque os que se aplicarem ao seu caso)?"
                label-for="inp-sintomas"
                >
              <div id="checkboxes">
                  <input type="checkbox" id="Tosse seca" value="Tosse seca" v-model="questionarioCovid.sintomas" />
                  <label>Tosse seca</label>

                  <input type="checkbox" id="Dor muscular" value="Dor muscular" v-model="questionarioCovid.sintomas" />
                  <label>Dor muscular</label>
                  
                  <input type="checkbox" id="Dor de cabeça" value="Dor de cabeça" v-model="questionarioCovid.sintomas" />
                  <label>Dor de cabeça</label>
              </div>


               <!-- <select class="form-control" id="inp-nome" v-model="questionarioCovid.sintomas" 
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Tosse seca">Tosse seca</option>
                    <option value="Dor muscular">Dor muscular</option>
                    <option value="Dor de cabeça">Dor de cabeça</option>
                    <option value="Perda ou diminuição de olfato ou paladar">Perda ou diminuição de olfato ou paladar</option>
                    <option value="Dor de cabeça">Dor de cabeça</option>
                    <option value="Coriza ">Coriza </option>
                    <option value="Congestão Nasal">Congestão Nasal</option>
                    <option value="Diarréia ">Diarréia </option>
                    <option value="Fraqueza ">Fraqueza </option>
                    <option value="Náusea ">Náusea </option>
                    <option value="Dor no corpo">Dor no corpo</option>
                    <option value="Cansaço ">Cansaço </option>
                    <option value="Mal estar ">Mal estar </option>
                    <option value="Nenhum desses sintomas  ">Nenhum desses sintomas  </option>
                </select>
-->
        </b-form-group>

        
        <b-form-group
                label="Há quantos dias iniciaram os sintomas?"
                label-for="inp-qtdDiasSintomas"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.qtdDiasSintomas"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="0 a 4 dias">0 a 4 dias</option>
                    <option value="5 a 7 dias">5 a 7 dias</option>
                    <option value="8 a 14 dias">8 a 14 dias</option>
                    <option value="Mais de 14 dias">Mais de 14 dias</option>
                </select>
        </b-form-group>

        
        <b-form-group
                label="Em caso de ter apresentado sintomas ou sinais, nas últimas 48 horas o que tem ocorrido com a progressão dos sintomas?"
                label-for="inp-progressao_sintomas"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.progressaoSintomas"
                        :options="form.nome_options"
                          required
                        @input="onChangeExame">
                    <option value="Piorado">Piorado</option>
                    <option value="Sem mudanças Melhorado">Sem mudanças Melhorado</option>
                    <option value="Melhorado">Melhorado</option>
                    <option value="Nao se aplica">Nao se aplica</option>
                </select>
        </b-form-group>

        
        <b-form-group
                label="Adicionalmente, por favor verifique se você está tendo algum desses sintomas abaixo (marque os que se aplicarem ao seu caso)."
                label-for="inp-sintomas_adicionais"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.sintomasAdicionais" 
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Tosse de moderada a severa">Tosse de moderada a severa</option>
                    <option value="Falta de ar persistente">Falta de ar persistente</option>
                    <option value="Dor ou pressão persistente no peito">Dor ou pressão persistente no peito</option>
                    <option value="Sonolência ">Sonolência </option>
                    <option value="Respiração rápida ou ofegante">Respiração rápida ou ofegante</option>
                    <option value="Fadiga extrema">Fadiga extrema</option>
                    <option value="Calafrio ">Calafrio </option>
                    <option value="Vômitos ">Vômitos </option>
                    <option value="Mal estar intenso ou piorando">Mal estar intenso ou piorando</option>
                    <option value="Sensação de desmaio">Sensação de desmaio</option>
                    <option value="Tontura constante e severa">Tontura constante e severa</option>
                    <option value="Pressão baixa">Pressão baixa</option>
                    <option value="Nenhum desses sintomas ">Nenhum desses sintomas </option>
                    
                </select>
        </b-form-group>

        
        <b-form-group
                label="Você teve contato próximo com alguém diagnosticado (ou suspeito grave) com COVID-19, nos últimos 14 dias?
"
                label-for="inp-contato"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.contatoSuspeito"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Sim">Sim, o contato foi nas 72 horas antes de iniciar os sintomas</option>
                    <option value="Sim">Sim, o contato foi dentro de 7 dias depois dos sintomas iniciarem </option>
                    <option value="Sim">Sim, o contato foi 3 dias depois dos sintomas terminarem. </option>
                    <option value="Não">Não </option>
                    <option value="Não sei">Não sei</option>
                </select>
        </b-form-group>


        <b-form-group
                label="Você tem alguma dessas condições seguintes (marque as que se aplicarem ao seu caso)? "
                label-for="inp-patologias"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.patologias"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Diabetes com complicações">Diabetes com complicações</option>
                    <option value="História de AVC">História de AVC</option>
                    <option value="Hipertensão ">Hipertensão </option>
                    <option value="Doença Cardíaca">Doença Cardíaca </option>
                    <option value="Doenca renal">Doenca renal</option>
                    <option value="Gravidez ">Gravidez </option>
                    <option value="Doença Pulmonar ou asma">Doença Pulmonar ou asma</option>
                    <option value="Imunidade baixa">Imunidade baixa</option>
                    <option value="Cancer">Cancer </option>
                    <option value="Anemia falciforme ">Anemia falciforme </option>
                    <option value="Obesidade ">Obesidade </option>
                    <option value="Sinusite ">Sinusite </option>
                    <option value="Doença autoimune">Doença autoimune</option>
                    <option value="Tabagismo ">Tabagismo </option>
                    <option value="Conjuntivite ">Conjuntivite </option>
                    <option value="Nenhuma dessas ">Nenhuma dessas </option>

                </select>
        </b-form-group>

        
        <b-form-group
                label="Qual a sua faixa etária? 
"
                label-for="inp-FaixaEtaria"
                >
                <select class="form-control" id="inp-FaixaEtaria" v-model="questionarioCovid.faixaEtaria"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Mais de 64 anos">Mais de 64 anos</option>
                    <option value="Entre 18 a 64 anos">Entre 18 a 64 anos</option>
                    <option value="Menos de 18 anos">Menos de 18 anos</option>
                </select>
        </b-form-group>
        
        <b-form-group
                label="Qual o gênero? 
"
                label-for="inp-Sexo"
                >
                <select class="form-control" id="inp-Sexo" v-model="questionarioCovid.sexo"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="Masculino">Masculino  </option>
                    <option value="Feminino">Feminino </option>
                </select>
        </b-form-group>
        
        <b-form-group
                label="Qual o seu tipo sanguíneo? 
"
                label-for="inp-TipoSanguineo"
                >
                <select class="form-control" id="inp-nome" v-model="questionarioCovid.tipoSanguineo"
                        :options="form.nome_options"
                        required
                        @input="onChangeExame">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O </option>
                </select>
        </b-form-group>

        <button type="submit" class="btn btn-primary" style="margin: 0 15px;"> Confirmar</button>

        <button type="reset" class="btn btn-danger" onClick="window.location.reload()"> Cancelar</button>


      </form>


    </b-modal>
  </BaseLayout>
</template>

<script>
import QuestionarioCovid from '../services/questionarioCovid'
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {
    mounted(){
    this.listar()
  },

  name: 'QuestionariosCovid',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  
  data() {
    return {

         questionarioCovid:{
          id: '',
          sexo: '',
          temperatura: '',
          sintomas: [],
          qtdDiasSintomas: '', 
          progressaoSintomas: '', 
          sintomasAdicionais: '', 
          contatoSuspeito: '',
          patologias: '',
          faixaEtaria: '',
          tipoSanguineo: '',
          dataCadastro:  ''
         },
         questionariosCovid: [],


      fields: [
        {
          key: 'Sexo',  
          sortable: true
        },
        {
          key: 'dataCadastro',
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
      QuestionarioCovid.listar().then(resposta => {
          this.questionariosCovid = resposta.data
        })
    },


    salvar(){

      if (!this.questionarioCovid.id){
          QuestionarioCovid.salvar(this.questionarioCovid).then(resposta => {
            this.questionarioCovid = {}
            alert('Salvo com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }else{
          QuestionarioCovid.salvar(this.questionarioCovid).then(resposta => {
            this.questionarioCovid = {}
            alert('Atualizado com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    editar(questionarioCovid){
      this.questionarioCovid = questionarioCovid
    },

    remover(questionarioCovid){
      if(confirm('Deseja excluir o questionario Covid?')){
        QuestionarioCovid.apagar(questionarioCovid).then(resposta => {
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



<template>
  <BaseLayout activemenu="3">
 <!--   <BaseContentTitle icon="notes-medical">
      Sistema Especialista
    </BaseContentTitle>
-->
<br>


<div class="container-fluid tab-pane active  border border-primary" style="padding:30px">
  <h1>Triagem</h1>
  <form
        ref="form"
        @submit.prevent="salvar"
    >
  <ul class="" role="tablist">
    <div class="tab-content" >
        <div id="sintomas" class="container funkyradio tab-pane ">
        <h6>Quais desses sintomas você está sentindo?</h6>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="nauseas" id="trueNauseas" v-model="questionarioTriagem.sintomaTriagem" value="1"> <label for="trueNauseas"> Nauseas</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="fadiga" id="trueFadiga" v-model="questionarioTriagem.sintomaTriagem" value="2"> <label for="trueFadiga"> Fadiga</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="sonolencia" id="trueSonolencia" v-model="questionarioTriagem.sintomaTriagem" value="3"> <label for="trueSonolencia"> Sonolência</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="fome" id="trueFome" v-model="questionarioTriagem.sintomaTriagem" value="4"> <label for="trueFome"> Fome</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="dorDeCabeca" id="trueDorDeCabeca" v-model="questionarioTriagem.sintomaTriagem" value="5"> <label for="trueDorDeCabeca"> Dor De Cabeca</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="visaoEmbacada" id="trueVisaoEmbacada" v-model="questionarioTriagem.sintomaTriagem" value="6"> <label for="trueVisaoEmbacada"> Visão Embaçada</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="bocaSeca" id="trueBocaSeca" v-model="questionarioTriagem.sintomaTriagem" value="7"> <label for="trueBocaSeca"> Boca Seca</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="vontadeExcessivaUrinar" id="trueVontadeExcessivaUrinar" v-model="questionarioTriagem.sintomaTriagem" value="8"> <label for="trueVontadeExcessivaUrinar"> Vontade Excessiva de Urinar</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="dificuldadeRespirar" id="trueDificuldadeRespirar" v-model="questionarioTriagem.sintomaTriagem" value="9"> <label for="trueDificuldadeRespirar"> Dificuldade de Respirar</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="halitoCetonico" id="trueHalitoCetonico" v-model="questionarioTriagem.sintomaTriagem" value="10"> <label for="trueHalitoCetonico"> H0alito Cetônico</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="sedeExcessiva" id="trueSedeExcessiva" v-model="questionarioTriagem.sintomaTriagem" value="11"> <label for="trueSedeExcessiva"> Sede Excessiva</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="fraqueza" id="trueFraqueza" v-model="questionarioTriagem.sintomaTriagem" value="12"> <label for="trueFraqueza"> Fraqueza</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="confusaoMental" id="trueConfusaoMental" v-model="questionarioTriagem.sintomaTriagem" value="13"> <label for="trueConfusaoMental"> Confusão Mental</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="tontura" id="trueTontura" v-model="questionarioTriagem.sintomaTriagem" value="14"> <label for="trueTontura"> Tontura</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="falaArrastada" id="trueFalaArrastada" v-model="questionarioTriagem.sintomaTriagem" value="15"> <label for="trueFalaArrastada"> Fala Arrastada</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="tremores" id="trueTremores" v-model="questionarioTriagem.sintomaTriagem" value="16"> <label for="trueTremores"> Tremores</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="palpitacoes" id="truePalpitacoes" v-model="questionarioTriagem.sintomaTriagem" value="17"> <label for="truePalpitacoes"> Palpitações</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="incPensarClaramente" id="trueIncPensarClaramente" v-model="questionarioTriagem.sintomaTriagem" value="18"> <label for="trueIncPensarClaramente"> Incapaz Pensar Claramente</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="convulsoes" id="trueConvulsoes" v-model="questionarioTriagem.sintomaTriagem" value="19"> <label for="trueConvulsoes"> Convulsões</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="suorExcessivo" id="trueSuorExcessivo" v-model="questionarioTriagem.sintomaTriagem" value="20"> <label for="trueSuorExcessivo"> Suor Excessivo</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="taquicardia" id="trueTaquicardia" v-model="questionarioTriagem.sintomaTriagem" value="21"> <label for="trueTaquicardia"> Taquicardia</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="lesaoMuscular" id="trueLesaoMuscular" v-model="questionarioTriagem.sintomaTriagem" value="22"> <label for="trueLesaoMuscular"> Lesão Muscular</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="paralisia" id="trueParalisia" v-model="questionarioTriagem.sintomaTriagem" value="23"> <label for="trueParalisia"> Paralisia</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="constipacao" id="trueConstipacao" v-model="questionarioTriagem.sintomaTriagem" value="24"> <label for="trueConstipacao"> Constipação</label></div>
          </div>
          
                <li >
                    <button type="button" class="btn btn-primary" style="margin: 0 15px;" data-toggle="pill" href="#medicamentoTriagem"> Próximo</button>
   
                </li>
        </div>
      <div id="medicamentoTriagem" class="funkyradio container tab-pane fade"><br>
      <h6>Você está usando algum desses medicamento?</h6>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Corticosteróides" id="Corticosteróides" v-model="questionarioTriagem.medicamentoTriagem" value="1"><label for="Corticosteróides"> Corticosteróides</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Octreotida" id="Octreotida" v-model="questionarioTriagem.medicamentoTriagem" value="2"><label for="Octreotida"> Octreotida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Betabloqueadores" id="Betabloqueadores" v-model="questionarioTriagem.medicamentoTriagem" value="3"> <label for="Betabloqueadores"> Betabloqueadores</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Epinefrina" id="Epinefrina" v-model="questionarioTriagem.medicamentoTriagem" value="4"> <label for="Epinefrina"> Epinefrina</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="DiureticosTiazidicos" id="DiureticosTiazidicos" v-model="questionarioTriagem.medicamentoTriagem" value="5"> <label for="DiureticosTiazidicos"> Diúreticos Tíazidicos</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Niacina" id="Niacina" v-model="questionarioTriagem.medicamentoTriagem" value="6"> <label for="Niacina">  Niacina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Pentamidina" id="Pentamidina" v-model="questionarioTriagem.medicamentoTriagem" value="7"> <label for="Pentamidina"> Pentamidina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="InibidoresDaProtease" id="trueInibidoresDaProtease" v-model="questionarioTriagem.medicamentoTriagem" value="8"> <label for="trueInibidoresDaProtease"> InibidoresDaProtease</label></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="LAsparaginase" id="LAsparaginase" v-model="questionarioTriagem.medicamentoTriagem" value="9"> <label for="LAsparaginase"> LAsparaginase</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Antipsicoticos" id="Antipsicoticos" v-model="questionarioTriagem.medicamentoTriagem" value="10"> <label for="Antipsicoticos"> Antipsicoticos</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Olanzapina" id="Olanzapina" v-model="questionarioTriagem.medicamentoTriagem" value="11"> <label for="Olanzapina"> Olanzapina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Duloxetina" id="Duloxetina" v-model="questionarioTriagem.medicamentoTriagem" value="12"> <label for="Duloxetina"> Duloxetina</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Antfetamina" id="Antfetamina" v-model="questionarioTriagem.medicamentoTriagem" value="13"> <label for="Antfetamina"> Antfetamina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Paroxetina" id="Paroxetina" v-model="questionarioTriagem.medicamentoTriagem" value="14"> <label for="Paroxetina"> Paroxetina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Pravastatina" id="Pravastatina" v-model="questionarioTriagem.medicamentoTriagem" value="15"> <label for="Pravastatina"> Pravastatina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Glibenclamida" id="Glibenclamida" v-model="questionarioTriagem.medicamentoTriagem" value="16"> <label for="Glibenclamida"> Glibenclamida</label></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Glipizida" id="Glipizida" v-model="questionarioTriagem.medicamentoTriagem" value="18"> <label for="Glipizida"> Glipizida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Clorpropamida" id="Clorpropamida" v-model="questionarioTriagem.medicamentoTriagem" value="19"> <label for="Clorpropamida"> Clorpropamida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Nateglinida" id="Nateglinida" v-model="questionarioTriagem.medicamentoTriagem" value="20"> <label for="Nateglinida"> Nateglinida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Repaglinida" id="Repaglinida" v-model="questionarioTriagem.medicamentoTriagem" value="21"> <label for="Repaglinida"> Repaglinida</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Acarbose" id="Acarbose" v-model="questionarioTriagem.medicamentoTriagem" value="22"> <label for="Acarbose"> Acarbose</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Metformina" id="Metformina" v-model="questionarioTriagem.medicamentoTriagem" value="23"> <label for="Metformina"> Metformina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Pioglitazona" id="Pioglitazona" v-model="questionarioTriagem.medicamentoTriagem" value="24"> <label for="Pioglitazona"> Pioglitazona</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Sitagliptina" id="Sitagliptina" v-model="questionarioTriagem.medicamentoTriagem" value="25"> <label for="Sitagliptina"> Sitagliptina</label></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Vildagliptina" id="Vildagliptina" v-model="questionarioTriagem.medicamentoTriagem" value="26"> <label for="Vildagliptina"> Vildagliptina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Saxagliptina" id="Saxagliptina" v-model="questionarioTriagem.medicamentoTriagem" value="27"> <label for="Saxagliptina"> Saxagliptina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Exenatida" id="Exenatida" v-model="questionarioTriagem.medicamentoTriagem" value="28"> <label for="Exenatida"> Exenatida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Gliclazida" id="Gliclazida" v-model="questionarioTriagem.medicamentoTriagem" value="29"> <label for="Gliclazida"> Gliclazida</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Espironolactona" id="Espironolactona" v-model="questionarioTriagem.medicamentoTriagem" value="30"> <label for="Espironolactona"> Espironolactona</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Amilorida" id="Amilorida" v-model="questionarioTriagem.medicamentoTriagem" value="31"> <label for="Amilorida"> Amilorida</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Triantereno" id="Triantereno" v-model="questionarioTriagem.medicamentoTriagem" value="32"> <label for="Triantereno"> Triantereno</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="InibidoresDoECA" id="InibidoresDoECA" v-model="questionarioTriagem.medicamentoTriagem" value="33"> <label for="InibidoresDoECA"> InibidoresDoECA</label></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="AntagonistaDosReceptoresDaAngiotensina" id="AntagonistaDosReceptoresDaAngiotensina" v-model="questionarioTriagem.medicamentoTriagem" value="34"> <label for="AntagonistaDosReceptoresDaAngiotensina"> AntagonistaDosReceptoresDaAngiotensina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="AntiInflamatoriosNaoEsteroides" id="AntiInflamatoriosNaoEsteroides" v-model="questionarioTriagem.medicamentoTriagem" value="35"> <label for="AntiInflamatoriosNaoEsteroides"> AntiInflamatoriosNaoEsteroides</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Trimetoprim" id="Trimetoprim" v-model="questionarioTriagem.medicamentoTriagem" value="36"> <label for="Trimetoprim"> Trimetoprim</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="PenicilinaGPotassica" id="PenicilinaGPotassica" v-model="questionarioTriagem.medicamentoTriagem" value="38"> <label for="PenicilinaGPotassica"> PenicilinaGPotassica</label></div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="BetaAgonista" id="BetaAgonista" v-model="questionarioTriagem.medicamentoTriagem" value="39"> <label for="BetaAgonista"> BetaAgonista</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="DiureticosDeAlca" id="DiureticosDeAlca" v-model="questionarioTriagem.medicamentoTriagem" value="40"> <label for="DiureticosDeAlca"> DiureticosDeAlca</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Albuterol" id="Albuterol" v-model="questionarioTriagem.medicamentoTriagem" value="41"> <label for="Albuterol"> Albuterol</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Terbutalina" id="Terbutalina" v-model="questionarioTriagem.medicamentoTriagem" value="42"> <label for="Terbutalina"> Terbutalina</label></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><input type="checkbox" name="Angiotensina" id="Angiotensina" v-model="questionarioTriagem.medicamentoTriagem" value="43"> <label for="Angiotensina"> Angiotensina</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
        
            <li class="nav-item">
            
              <button type="button" class="btn btn-primary" style="margin: 0 15px;" data-toggle="pill" href="#menudiabetico"> Próximo</button>

            </li>
        </div>
      <div id="menudiabetico" class="container active tab-pane  "><br>
      
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Você é diabetico?'" label-for="inp-diabetico" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="diabetico" id="trueDiabetico" v-model="questionarioTriagem.diabetico" value="S"> <label for="trueDiabetico"> Sim</label><br/></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="diabetico" id="falseDiabetico" v-model="questionarioTriagem.diabetico" value="N"> <label for="falseDiabetico"> Não</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
        
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Faz uso de insulina?'" label-for="inp-insulina" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="insulina" id="trueInsulina" v-model="questionarioTriagem.insulina" value="S"> <label for="trueInsulina"> Sim</label></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="insulina" id="falseInsulina" v-model="questionarioTriagem.insulina" value="N"> <label for="falseInsulina"> Não</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
          
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Você consumiu álcool?'" label-for="inp-diabetico" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="alcool" id="truealcool" v-model="questionarioTriagem.alcool" value="S"> <label for="truealcool"> Sim</label></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="alcool" id="falsealcool" v-model="questionarioTriagem.alcool" value="N"> <label for="falsealcool"> Não</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
            <li class="nav-item">
             
              <button type="button" class="btn btn-primary" style="margin: 0 15px;" data-toggle="pill" href="#menuglicemiaEpotassio"> Próximo</button>

            </li>
        </div>
        
      <div id="menuglicemiaEpotassio" class="container tab-pane fade"><br>
      
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Você tem como medir a sua glicemia?'" label-for="inp-diabetico" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="medirGlicemia" id="trueMedirGlicemia" v-model="questionarioTriagem.medirGlicemia" value="S"> <label for="trueMedirGlicemia"> Sim</label></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="medirGlicemia" id="falseMedirGlicemia" v-model="questionarioTriagem.medirGlicemia" value="N"> <label for="falseMedirGlicemia"> Não</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
        <div v-if="questionarioTriagem.medirGlicemia == 'S'">
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Qual o resultado da sua glicemia?'" label-for="inp-glicemia" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><b-form-input type="text" name="resultadoGlicemia" id="resultadoGlicemia" v-model="questionarioTriagem.resultadoGlicemia"></b-form-input></div>
          </div>
        </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Você tem como medir seu potassio?'" label-for="inp-potassio" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="potassio" id="truePotassio" v-model="questionarioTriagem.potassio" value="S"> <label for="truePotassio"> Sim</label></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><input type="radio" name="potassio" id="falsePotassio" v-model="questionarioTriagem.potassio" value="N"> <label for="falsePotassio"> Não</label></div>
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"></div>
          </div>
          
        <div v-if="questionarioTriagem.potassio == 'S'">
          <div class="row">
            <div class="col-xs-3 col-sm-3" style="padding-right:10px"><h6><b-form-group :label="'Qual o resultado do potassio?'" label-for="inp-resultadopotassio" ></b-form-group></h6></div>
            <div class="col-xs-3 col-sm-3 funkyradio" style="padding-right:10px"><b-form-input type="text" name="resultadopotassio" id="resultadopotassio" v-model="questionarioTriagem.resultadopotassio"></b-form-input></div>
          </div>
        </div>
            <li class="nav-item">
              
               <button type="submit" class="btn btn-primary" style="margin: 0 15px;"> Enviar</button>
          
            </li>
        </div>
    </div>
  </ul>
  </form>
</div>
   

  </BaseLayout>
</template>

<script>
import QuestionarioTriagem from '../services/questionarioTriagem'
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseLayoutQuest from '@/components/BaseLayoutQuest.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {

  mounted(){
    this.listar()
  },
  name: 'QuestionariosTriagem',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
         questionarioTriagem:{
          id: '',
           diabetico: '', 
             insulina: '', 
             medirGlicemia: '',   
             resultadoGlicemia: '',
             potassio: '',
             resultadopotassio: '',
             alcool: '',            
             sintomaTriagem: [],
             medicamentoTriagem: []
         },
         questionariosTriagem: [],


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
      QuestionarioTriagem.listar().then(resposta => {
          this.questionariosTriagem = resposta.data
        })
    },

    salvar(){

      if (!this.questionarioTriagem.id){
          QuestionarioTriagem.salvar(this.questionarioTriagem).then(resposta => {
            this.questionarioTriagem = {}
            alert('Salvo com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }else{
          QuestionarioTriagem.salvar(this.questionarioTriagem).then(resposta => {
            this.questionarioTriagem = {}
            alert('Atualizado com sucesso!')
            window.location.reload();
            this.listar()
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    },

    editar(questionarioTriagem){
      this.questionarioTriagem = questionarioTriagem
    },

    remover(questionarioTriagem){
      if(confirm('Deseja excluir o questionarioTriagem?')){
        QuestionarioTriagem.apagar(questionarioTriagem).then(resposta => {
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

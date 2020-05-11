<template>
<BaseLayout activemenu="6">
    <BaseContentTitle icon="capsules">
      Monitoramento
    </BaseContentTitle>
    
     <div class="table-responsive">
      <b-table
        striped
        hover
        fixed
        bordered
        small
        :items="items"
        :fields="fields"
      />
    </div>
    <b-row>
      <b-col b-col lg="1" class="pb-2"><b-button href="#">Diabetes</b-button></b-col>
      <b-col b-col lg="1" class="pb-2"><b-button href="#">Hipertensão</b-button></b-col> 
    </b-row>
</BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {
  name: 'Monitoramento',
  components: {
    BaseLayout,
    BaseContentTitle
  }
};

</script>    
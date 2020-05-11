<template>
  <BaseLayout activemenu="5">
   <BaseContentTitle icon="clipboard-list">
      Histórico
   </BaseContentTitle>
    <h3>Histórico de análises</h3>
    <div class="table-responsive">
      <b-table
        striped
        hover
        fixed
        bordered
        small
        :items="items"
        :fields="fields"
      >
        <template
          slot="acoes"
          slot-scope="data"
        >
          <!-- `data.value` is the value after formatted by the Formatter -->
          <a
            :href="'#/download-cda/' + data.item.id"
            class="badge badge-primary p-1"
          >
            <font-awesome-icon icon="cloud-download-alt" /> Baixar CDA
          </a>
        </template>
      </b-table>
    </div>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {
  name: 'Historico',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
      sanalisando: true,
      fields: [
        {
          key: 'situacao',
          label: 'Situação',
          sortable: true
        },
        {
          key: 'data',
          sortable: true
        },
        {
          key: 'acoes',
          label: 'Ações',
          sortable: false
        }
      ],
      items: [
        { situacao: 'Situação', data: '03/04/2019', id: '0001' },
        { situacao: 'Situação', data: '03/04/2019', id: '0002' },
        { situacao: 'Situação', data: '03/04/2019', id: '0003' },
        { situacao: 'Situação', data: '03/04/2019', id: '0004' }
      ]
    };
  },
  methods: {
    startAnalise(evt) {
      setTimeout(() => {
        this.$bvModal.hide('modal-analise');
      }, 2000);
    }
  }
};
</script>

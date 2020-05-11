<template>
  <b-col
    md="6"
    lg="4"
    class="p-3"
  >
    <b-card class="shadow bg-white rounded">
      <b-row
        no-gutters
        style="min-heignt:50px"
      >
        <b-col
          md="8"
          lg="9"
          class="d-flex align-items-center justify-content-left"
        >
          <b-card-title>
            {{ title }}
          </b-card-title>
        </b-col>
        <b-col
          md="4"
          lg="3"
          class="d-flex align-items-center justify-content-center p-2"
        >
          <font-awesome-icon
            v-if="success === true"
            icon="check"
            style="color:#0a0; width: 40px; height: 40px"
          />
          <font-awesome-icon
            v-if="success === false"
            icon="exclamation-triangle"
            style="color:#ffaa00; width: 40px; height: 40px"
          />
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    success: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};
</script>

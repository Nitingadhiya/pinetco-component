<template>
  <div class="d-inline-block" data-toggle="tooltip" :data-placement="position" :title="title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VueToolTip",
  props: {
    title: {
      type: String,
      require: true
    },
    position: {
      type: String,
      require: false,
      default: 'top'
    }
  },
};
</script>

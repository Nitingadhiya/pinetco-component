<template>
  <div class="table-responsive">
    <table class="table table-bordered text-left mb-0">
      <slot name="thead"></slot>
      <slot name="tbody"></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "VueTable",
  props:{
    responsive : {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

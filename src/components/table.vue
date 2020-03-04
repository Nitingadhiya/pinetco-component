<template>
  <div class="table-responsive bg-white">
    <table class="table table-bordered text-left mb-0">
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <slot name="tbody"></slot>
      </tbody>
      <tfoot>
        <slot name="tfoot"></slot>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "VueTable",
  props: {
    responsive: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

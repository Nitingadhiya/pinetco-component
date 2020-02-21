<template>
  <table class="table table-bordered text-left mb-0">
    <slot name="thead"></slot>
    <slot name="tbody"></slot>
  </table>
</template>

<script>
export default {
  name: "UITable",
};
</script>

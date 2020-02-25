<template>
  <button type="button" :class="'btn btn-'+classes" :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: "VueButton",
  props:{
    classes: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  }
};
</script>

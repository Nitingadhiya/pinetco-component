<template>
  <button type="button" :class="'btn btn-'+class_name" :disabled="disabled"><slot></slot></button>
</template>

<script>
export default {
  name: "UIButton",
  props:{
    class_name: {
      type: String,
      required: true
    },
    button_class: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  }
};
</script>

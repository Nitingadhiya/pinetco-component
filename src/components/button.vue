<template>
  <button type="button" :class="'btn btn-'+classes" :disabled="disabled" @click.prevent="click"><slot></slot></button>
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
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
};
</script>

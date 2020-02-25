<template>
  <div>
      <img alt="Vue logo" src="../assets/lock.svg" class="lock-image mb-3" />
        <h4 class="mb-2 font-weight-bold">
         {{message}}
        </h4>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VueErrorMessage",
  props: {
    message: {
      type: String,
      required: false
    }
  }
};
</script>
<style>
    .lock-image{
        width: 200px
    }
</style>

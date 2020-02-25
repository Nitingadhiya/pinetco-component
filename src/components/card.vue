<template>
  <div class="card border text-left" :class="{'box-shadow' : shadow }">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: "VueCard",
  props:{
    shadow: {
      type: Boolean,
      required: false
    }
  }
};
</script>
<style>
  .box-shadow{
    border-radius: .1875rem;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(45,62,80,.12);
    margin: 10px;
    position: relative;
  }
</style>

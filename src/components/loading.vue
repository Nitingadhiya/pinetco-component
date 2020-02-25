<template>
  <div class="spinner-blur d-flex">
  <div class="spinner-border m-auto spin-bg" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>
</template>

<script>
export default {
  name: "VueLoading"
};
</script>
<style>
  .spinner-blur {
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*background-color: rgba(0,0,0,0.2);*/
  }
  .spin-bg {
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
  }

</style>


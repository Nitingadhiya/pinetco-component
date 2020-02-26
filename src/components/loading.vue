<template>
  <div class="spinner-blur d-flex dummy">
    <div class="spinner-border m-auto spin-bg" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VueLoading",
    mounted() {
      $(".page, #nav").css('filter', 'blur(5px)');
      setTimeout(()=> $(".dummy").addClass('active'), 400);
    },
  };
</script>
<style>
  .spinner-blur {
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .dummy {
    opacity: 0;
    transition: 0.5s;
  }
  .active {
    opacity: 1;
  }
  .sr-only {
    z-index: 10001;
  }
  .spin-bg {
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*background-color: rgba(0,0,0,0.2);*/
  }

</style>


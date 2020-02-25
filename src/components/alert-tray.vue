<template>
  <div
          class="float m-2"
          :class="[{'float-remove' : float},  y , x ]"
          role="alert"
  >
  <slot />
  </div>
</template>

<script>
  export default {
    name: "VueFireAlarmTray",
    props: {
      x: {
        type: String,
        required: false
      },
      y: {
        type: String,
        required: false
      },
      float: {
        type: Boolean,
        required: false
      }
    },
  };
</script>
<style>
  .float {
    position: fixed;
    max-width: 400px;
    z-index: 1001;
  }
  .float-remove {
    position: relative;
  }
  .right {
    right: 0
  }
  .left {
    left: 0
  }
  .top {
    top: 0
  }
  .bottom {
    bottom: 0
  }
  .center {
    margin: auto !important;
    margin-top: 4px !important;
    margin-bottom: 4px !important;
    left: 0;
    right:0;
  }
</style>

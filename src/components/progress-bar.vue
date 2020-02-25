<template>
  <div class="progress">
    <div :class="'progress-bar w-'+percentage+' bg-'+color+' '+classes" role="progressbar"
         :aria-valuenow="percentage" :aria-valuemin="percentage" aria-valuemax="100"
    >
      {{percentage}}%
    </div>
  </div>
</template>

<script>
export default {
  name: "VueProgressBar",
  props: {
    percentage: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
    },
    classes: {
      type: String,
      required: false
    }

  }
};
</script>

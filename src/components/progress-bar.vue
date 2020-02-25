<template>
  <div class="progress">
    <div :class="'progress-bar w-'+percentage+' bg-'+color+' '+custom_class" role="progressbar"
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
    custom_class: {
      type: String,
      required: false
    }

  }
};
</script>

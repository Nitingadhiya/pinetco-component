<template>
  <a
    :href="href"
    :target="external ? '_blank' : '_self'"
    :style="'color:'+color+';font-size:' +fontSize"
  >
    {{text}}
  </a>
</template>

<script>
export default {
  name: "UILinks",
  props:{
    href:{
      type:String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      required: false
    },
    color: {
      type:String,
      required: false
    },
    fontSize:{
      type: String,
      required: false
    }
  }
};
</script>

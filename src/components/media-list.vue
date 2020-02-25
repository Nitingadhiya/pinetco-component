<template>
  <ul class="list-unstyled">
    <li class="media">
      <img :src="media_url" class="mr-3 media-image rounded-circle" alt="...">
      <div class="media-body text-left">
        <h5 class="mt-0 mb-1">{{title}}</h5>
        <slot></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VueMediaList",
  props:{
    media_url: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  }
};
</script>
<style>
  .media-image {
    height:64px;
    width:64px;
  }
  </style>

<template>
  <div class="p-2 text-center">
    <div class="label_text">{{title}}</div>
    <slot name="link" />
    <div class="clearfix"></div>
    <div class="big_number" :class="number_class">{{numbers}}</div>
    <slot name="help_text" />
  </div>
</template>

<script>
export default {
  name: "VueWellItem",
  props: {
    title: {
      type: String,
      required: false
    },
    numbers: {
      required: false
    },
    number_class: {
      type: String,
      required: false
    }
  }
};
</script>
<style>
.label_text {
  font-weight: 600;
  display: block;
  font-size: 0.8125rem;
  line-height: normal;
  margin-bottom: 4px;
  text-transform: uppercase;
}
.big_number {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 0;
  display: inline-block;
  line-height: 4.125rem;
  vertical-align: baseline;
}
.help_text {
  font-size: 0.875rem;
  color: #7c98b6;
}
</style>

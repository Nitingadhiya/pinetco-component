<template>
  <div class="dropdown d-inline-block">
    <div :id="id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="viewport">
      <slot name="performer"></slot>
    </div>
    <div class="dropdown-menu" :class="position" aria-labelledby="dropdownMenuButton">
      <slot></slot>
    </div>
  </div>
</template>
<!--class="dropdown-toggle"-->
<script>
export default {
  name: "VueDropDown",
  props: {
    id: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    position: {
      type: String,
      require: false,
      default: 'dropdown-menu-right'
    }
  },
};
</script>

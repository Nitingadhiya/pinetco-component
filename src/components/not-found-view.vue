<template>
  <div>
      <img alt="Not Found" src="../assets/not-found.png" class="not-found" />
<!--    <img alt="Vue logo" src="../assets/not-found-gold.png" class="not-found" />-->
    <div class="font-14 mt-2">
      No Data Found
    </div>
  </div>
</template>

<script>
export default {
  name: "UINotFoundMessage",
  props: {
    text: {
      type: String,
      required: false
    }
  }
};
</script>
<style>
    .not-found{
        width: 80px
    }
</style>

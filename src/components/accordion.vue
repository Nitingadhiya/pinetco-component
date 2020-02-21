<template>
  <div id="accordion" class="text-left">
    <div class="card">
      <div class="card-header" :id="id" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <slot name="header"></slot>
      </div>

      <div id="collapseOne" class="collapse" :aria-labelledby="id" data-parent="#accordion">
        <div class="card-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIAccordion",
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

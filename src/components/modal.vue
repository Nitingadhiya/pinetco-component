<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="id+'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog" :class="classes" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title"></slot>
          <h4 class="modal-title" :id="id+'Label'" v-if="title">{{title}}</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.prevent="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueModal",
  props: {
    title: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>
<style>
.close:focus {
  outline: 0;
}
</style>


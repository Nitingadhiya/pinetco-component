<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" :class="classes" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <slot></slot>
        </div>
        <div class="modal-footer border-top-0">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">{{cancelButtonText}}</button>
          <button type="button" class="btn btn-primary" @click.prevent="submitChanges()">{{saveButtonText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueConfirmModal",
  props:{
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
    },
    saveButtonText : {
      type: String,
      required: false,
      default: 'Yes',
    },
    cancelButtonText: {
      type: String,
      required: false,
      default: 'No'
    },
  },
  methods: {
    submitChanges() {
      this.$emit('submit');
    }
  }
};
</script>

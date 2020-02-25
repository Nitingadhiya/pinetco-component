<template>
  <div id="alert-show">
    <div
      class="alert alert-dismissible m-2" :data-auto-dismiss=time
      :class="['alert-'+type]"
      role="alert"
    >
      <div class="flex-wrap d-flex  text-left">
        <h6 class="mr-4 mb-0">
          {{ this.title }}
        </h6>
        <div class="font-14">
          <slot></slot>
          <slot name="infoText"></slot>
        </div>
      </div>
      <button
              type="button"
              class="close"
              @click.prevent="close"
              data-dismiss="alert"
              aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VueFireAlarm",
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      time: {
        type: String | Number,
        required: false,
        default: '5000',
      }
    },
    methods:{
      close() {
        this.$emit('close')
      },
      callFunction () {
        $('.alert[data-auto-dismiss]').each(function (index, element) {
          var $element = $(element),

                  timeout  = $element.data('auto-dismiss') || 5000;
          setTimeout(function () {
            $element.alert('close');
          }, timeout);
        });
        // test method
      }
    },
    created() {
    },
    mounted () {

      this.callFunction()
    }
  };
</script>

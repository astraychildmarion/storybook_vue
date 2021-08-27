<template>
  <div class="xy-countdown-alert" :style="alertWidth" v-if="isAlertVisible" @click="stopCountDown">
    <Alert :type="type" :message="message" banner closable />
  </div>
</template>
<script>
import { Alert } from 'ant-design-vue';

export default {
  name: 'XYCountdownAlert',
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'success',
      type: String,
    },
    message: {
      default: 'Servers have been deleted.',
      type: String,
    },
    width: {
      default: '350px',
      type: String,
    },
  },
  components: { Alert },
  data() {
    return {
      isAlertVisible: this.visible,
      timer: null,
      copyCountdownSecond: 4,
      countdownSecond: 4,
    };
  },
  watch: {
    isAlertVisible: {
      handler() {
        this.countDown();
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    alertWidth() {
      return { '--alert-width': this.width };
    },
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        this.countdownSecond -= 1;
      }, 1000);
      setTimeout(() => {
        this.stopCountDown();
      }, this.countdownSecond * 1000);
    },
    stopCountDown() {
      this.isAlertVisible = false;
      clearInterval(this.timer);
      this.timer = null;
      this.countdownSecond = this.copyCountdownSecond;
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-countdown-alert {
  width: var(--alert-width);
  ::v-deep .ant-alert {
    padding-top: 10px;
    padding-bottom: 10px;
    &.ant-alert-error {
      background-color: $alert-error-bg;
      .ant-alert-icon {
        color: $error-color;
      }
    }
    &.ant-alert-success {
      background-color: $alert-success-bg;
      .ant-alert-icon {
        color: $success-color;
      }
    }
    &-message {
      color: $alert-text;
    }
    &-banner {
      border-radius: $box-radius;
    }
  }
}
</style>

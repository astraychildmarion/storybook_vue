<template>
  <div class="xy-alert-wrapper">
    <Alert :type="type" :message="message" :description="description" />
  </div>
</template>
<script>
import { Alert } from "ant-design-vue";
export default {
  name: "XYAlert",
  props: {
    type: {
      default: 'info',
      type: String
    },
    message: {
      default: 'i am an alert',
      type: String
    },
    description: {
      default: 'alert details',
      type: String
    },
  },
  components: { Alert },
};
</script>
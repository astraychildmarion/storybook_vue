<template>
  <div class="xy-button-wrapper">
    <Button
      :type="type"
      :shape="shape"
      :size="size"
      :loading="loading"
      :disabled="disabled"
      :icon="icon"
      @click="$emit('clickButton')"
    >
      {{ buttonText }}
    </Button>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
export default {
  name: "XYButton",
  props: {
    buttonText: {
      default: "Button",
      type: String,
    },
    type: {
      default: "default",
      type: String,
    },
    shape: {
      type: String,
    },
    size: {
      default: "default",
      type: String,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    icon: {
      type: String,
    },
  },
  components: { Button },
};
</script>
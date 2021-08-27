<template>
  <Modal v-model="visible" wrapClassName="xy-server-detail-modal" :width="width" :footer="null">
    <template slot="title">
      <div class="xy-server-detail-modal__header">
        <div class="xy-server-detail-modal__header-title">
          {{ title }}
        </div>
      </div>
    </template>
    <div class="xy-server-detail-modal__content">
      <slot name="content" />
    </div>
  </Modal>
</template>
<script>
import { Modal } from 'ant-design-vue';

export default {
  name: 'XYServerDetail',
  components: { Modal },
  props: {
    title: {
      default: 'Server Detail',
      type: String,
    },
    visible: {
      default: false,
      type: Boolean,
    },
    width: {
      default: 1100,
      type: Number,
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-server-detail-modal {
  &__header {
    &-title {
      position: relative;
      width: fit-content;
      color: $server-detail-modal-title;
      font-size: 18px;
      font-weight: 500;
      &:before {
        position: absolute;
        bottom: -18px;
        content: '';
        width: 100%;
        height: 2px;
        background-color: $server-detail-modal-title;
      }
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>

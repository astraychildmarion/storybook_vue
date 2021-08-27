<template>
  <Modal
    v-model="isModalVisible"
    :closable="false"
    :maskClosable="false"
    :keyboard="false"
    width="416px"
    class="xy-confirm-modal"
  >
    <Row>
      <Col :span="2">
        <Icon type="exclamation-circle" :class="`${type}-icon`" />
      </Col>
      <Col :span="22">
        <div class="ant-modal-confirm-body">
          <span class="ant-modal-confirm-title">{{ title }}</span>
          <div class="ant-modal-confirm-content">{{ content }}</div>
        </div>
      </Col>
    </Row>
    <template slot="footer">
      <Button @click="$emit('cancel')" :disabled="isLoading">
        {{ cancelText }}
      </Button>
      <Button :class="`${type}`" @click="handleOk" :loading="isLoading">{{ okText }}</Button>
    </template>
  </Modal>
</template>
<script>
import { Modal, Row, Col, Button, Icon } from 'ant-design-vue';

export default {
  name: 'XYConfirmModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'title',
    },
    content: {
      type: String,
      default: 'content',
    },
    okText: {
      type: String,
      default: 'Confirm',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  components: { Modal, Row, Col, Button, Icon },
  data() {
    return {
      isLoading: false,
      isModalVisible: this.visible,
    };
  },
  watch: {
    visible(val) {
      this.isModalVisible = val;
      this.isLoading = false;
    },
  },
  methods: {
    handleOk() {
      this.isLoading = true;
      this.$emit('ok');
    },
  },
};
</script>

<style lang="scss" scoped>
.warning-icon {
  color: $warn-color;
  font-size: 22px;
}
.primary-icon {
  color: $primary-color;
  font-size: 22px;
}
.danger-icon {
  color: $error-color;
  font-size: 22px;
}
.warning,
.warning:hover,
.warning:focus,
.warning:active {
  color: #fff;
  background-color: $warn-color;
  border-color: $warn-color;
}
.primary,
.primary:hover,
.primary:focus,
.primary:active {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
}
.danger,
.danger:hover,
.danger:focus,
.danger:active {
  color: #fff;
  background-color: $error-color;
  border-color: $error-color;
}
.xy-confirm-modal {
  ::v-deep .ant-modal {
    &-footer {
      border-top: none;
      padding: 0 24px 24px;
    }
    .ant-modal-body {
      padding: 34px;
    }
  }
}
</style>

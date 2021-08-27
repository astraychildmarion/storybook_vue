<template>
  <div class="xy-server-detail-card">
    <div class="xy-server-detail-card__title">
      {{ title }}
    </div>
    <div class="xy-server-detail-card__content">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'XYServerDetailCard',
  props: {
    title: {
      default: 'Card title',
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-server-detail-card {
  position: relative;
  width: 360px;
  height: 376px;
  margin: 0 0 0 16px;
  padding: 20px 24px;
  border-radius: 3px;
  border: $server-detail-card-border;
  background-color: $server-detail-card-bg;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 3px;
    background-color: $server-detail-card-title;
    border-radius: 3px 3px 0 0;
  }
  &__title {
    color: $server-detail-card-title;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  &__content {
    &-row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      div:first-child {
        flex-grow: 1;
        font-size: 14px;
        text-align: left;
        color: $server-detail-card-title;
      }
      div:last-child {
        flex-grow: 1;
        font-size: 14px;
        font-weight: 500;
        text-align: right;
        color: $server-detail-card-text;
      }
    }
  }
}
</style>

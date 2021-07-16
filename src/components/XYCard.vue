<template>
  <Card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      :src="detail.imageSrc"
    />
    <slot></slot>
  </Card>
</template>

<script>
import { Card } from 'ant-design-vue'
export default {
  name: 'XYCard',
  components: { Card},
  props: {
    detail: {
      type: Object,
      default:() => {
        return {
          type: '',
          add: '',
          source: '',
          price: 'TWD',
          unit: '晚',
          imageSrc: ''
        }
      }
    }
  }
}
</script>

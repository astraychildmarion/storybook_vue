<template>
  <div class="xy-detail-text-wrapper">
    <Icon type="star" style="lineHeight: 18px"/>
    <Badge count="25" />
    <div style="marginTop:10px"><span>{{detail.type}}</span>。<span>{{ detail.add }}</span></div>
    <div>{{ detail.source }}</div>
    <div><b>{{ detail.price }}</b>/ {{ detail.unit }}</div>
  </div>
</template>
<script>
import { Icon, Badge } from 'ant-design-vue'
export default {
  name: "XYTextDetail",
  props: {
    detail: {
      type: Object
    }
  },
  components: { Icon, Badge}
};
</script>
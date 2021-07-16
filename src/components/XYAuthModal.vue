<template>
<div class="xy-modal-wrapper">
  <FormModel layout="inline" :model="formInline">
    <FormModelItem>
      <Input v-model="formInline.user" placeholder="Username">
        <Icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </Input>
    </FormModelItem>
    <FormModelItem>
      <Input v-model="formInline.password" type="password" placeholder="Password">
        <Icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </Input>
    </FormModelItem>
    <FormModelItem>
      <Button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
        @click="$emit('clickButton', formInline)"
      >
        Log in
      </Button>
    </FormModelItem>
  </FormModel>
</div>
</template>
<script>
import { FormModel, Button, Icon, Input } from 'ant-design-vue';
export default {
  name: 'XYAuthModal',
  components: { FormModel, FormModelItem: FormModel.Item, Button, Icon, Input },
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.xy-modal__wrapper {
  margin: 20px auto;
  border: 1px solid rgba($color: #ccc, $alpha: 0.6);
  box-shadow: 1px 1px 2px rgba($color: #ccc, $alpha: 0.5);
  border-radius: 10px;
  padding: 50px 20px;
}
</style>
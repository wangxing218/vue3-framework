<template>
  <div>{{ msg }}</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      msg: 'info',
    })
    return {
      ...toRefs(state),
    }
  },
}
</script>
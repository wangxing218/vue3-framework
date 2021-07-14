<template>
  <div class="height-full flex-column">
    <div class="font-hg">{{ girl.name }}</div>
    <app-hello></app-hello>
  </div>
</template>

<script lang="ts">
import { AppHello } from '@/test'
import '@/service/ajax'
interface Girl {
  name: string
}
export default {
  components: {
    AppHello,
  },
  setup() {
    const girl: Girl = {
      name: 'Girl Name',
    }
    var a: number = 1231
    return {
      a,
      girl,
    }
  },
}
</script>

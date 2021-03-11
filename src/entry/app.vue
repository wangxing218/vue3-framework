<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";


export default defineComponent({
  setup(){
    onMounted(()=>{
      console.log('app onmounted')
    })
  }
})

</script>

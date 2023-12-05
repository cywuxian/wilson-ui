
<template>
  <div id="app">
    <HelloWorld />
    <!-- <zy-verify-number v-model="result"></zy-verify-number> -->
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: false
    }
  }
}
</script>

<style></style>

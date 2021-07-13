<template>
  <div id="app">
    <HelloWorld v-show="false"/>
    <DirectivasExample v-show="false"/>
    <DirectivasBindAndModel/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DirectivasExample from './components/DirectivasExample.vue'
import DirectivasBindAndModel from './components/DirectivasBindAndModel.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DirectivasExample,
    DirectivasBindAndModel
  }
}
</script>
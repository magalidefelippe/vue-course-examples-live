<template>
  <div id="app">
    <HelloWorld v-show="false"/>
    <DirectivasExample v-show="false"/>
    <DirectivasBindAndModel v-show="false"/>
    <UltimasTresDirectivas v-show="false"/>
    <ComputedProperties/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DirectivasExample from './components/DirectivasExample.vue'
import DirectivasBindAndModel from './components/DirectivasBindAndModel.vue'
import UltimasTresDirectivas from './components/UltimasTresDirectivas.vue'
import ComputedProperties from './components/ComputedProperties.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DirectivasExample,
    DirectivasBindAndModel,
    UltimasTresDirectivas,
    ComputedProperties
  }
}
</script>
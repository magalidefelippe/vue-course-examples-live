<template>
  <div id="app">
    <HelloWorld v-show="false" />
    <DirectivasExample v-show="false" />
    <DirectivasBindAndModel v-show="false" />
    <UltimasTresDirectivas v-show="false" />
    <ComputedProperties v-show="false" />
    <Watchers v-show="false" />
    <ReutilizableButton message="hola" />
    <ReutilizableButton :message="message1" />
    <ReutilizableButton :message="message2" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DirectivasExample from "./components/DirectivasExample.vue";
import DirectivasBindAndModel from "./components/DirectivasBindAndModel.vue";
import UltimasTresDirectivas from "./components/UltimasTresDirectivas.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import Watchers from "./components/Watchers.vue";
import ReutilizableButton from "./components/ReutilizableButton.vue";

export default {
  name: "App",
  
  data: () => ({
    message1: "Hola desde el componente dos",
    message2: "Hola desde el componente tres",
  }),

  components: {
    HelloWorld,
    DirectivasExample,
    DirectivasBindAndModel,
    UltimasTresDirectivas,
    ComputedProperties,
    Watchers,
    ReutilizableButton,
  },
};
</script>
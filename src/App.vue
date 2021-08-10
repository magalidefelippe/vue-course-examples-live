<template>
  <div id="app">
    <!-- 
    <HelloWorld v-show="false" />
    <DirectivasExample v-show="false" />
    <DirectivasBindAndModel v-show="false" />
    <UltimasTresDirectivas v-show="false" />
    <ComputedProperties v-show="false" />
    <Watchers v-show="false" />
    <ReutilizableButton v-show="false" :secondMessage="message2" />
    <DialogComponent
      @closeDialog="visibilityOfDialog = false"
      :visibility="visibilityOfDialog"
      :message="message2"
      :count="0"
      v-show="false"
    />
    <el-button @click="visibilityOfDialog = true" v-show="false">
      Abrir dialogo!
    </el-button>

    <UserFormComponent @dataFromChild="setUserData" v-show="false"/>
    <h3 v-show="false">El nombre del usuario {{nickname}} es {{name}}</h3>
    <HooksComponent/> 
-->

    <router-view />
  </div>
</template>

<script>
/*import HelloWorld from "./components/HelloWorld.vue";
import DirectivasExample from "./components/DirectivasExample.vue";
import DirectivasBindAndModel from "./components/DirectivasBindAndModel.vue";
import UltimasTresDirectivas from "./components/UltimasTresDirectivas.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import Watchers from "./components/Watchers.vue";
import ReutilizableButton from "./components/ReutilizableButton.vue";
import DialogComponent from "./components/DialogComponent.vue";
import UserFormComponent from "./components/UserFormComponent.vue";
import HooksComponent from "./components/HooksComponent.vue";*/

export default {
  name: "App",

  data: () => ({
    message1: 9,
    message2: "HOLA ESTE ES EL MENSAJE",
    visibilityOfDialog: false,
    name: "",
    nickname: "",
  }),

  methods: {
    setUserData(dataUser) {
      this.name = dataUser.name;
      this.nickname = dataUser.username;
    },
  },
  /*components: {
    HelloWorld,
    DirectivasExample,
    DirectivasBindAndModel,
    UltimasTresDirectivas,
    ComputedProperties,
    Watchers,
    ReutilizableButton,
    DialogComponent,
    UserFormComponent,
    HooksComponent
  },*/
};
</script>
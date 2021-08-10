<template>
  <el-row>
    <el-col :span="4">
      <el-input
        style="margin-bottom: 16px"
        placeholder="Ingrese nickname"
        v-model="nickname"
      />
      <el-input placeholder="Ingrese su nombre" v-model="name" />
      <el-button @click="sendUserDataToParent"> Enviar </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    nickname: "",
    name: "",
  }),

  methods: {
    sendUserDataToParent() {
      this.$emit("dataFromChild", { name: this.name, username: this.nickname });
      this.name = "";
      this.nickname = "";
    },
  },
};
</script>


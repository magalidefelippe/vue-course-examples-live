<template>
  <el-row type="flex" justify="center">
    <el-col :span="4">
      <el-input
        class="input"
        placeholder="Ingrese nickname"
        v-model="nickname"
      />
      <el-input placeholder="Ingrese su nombre" v-model="name" class="input" />
      <el-button class="btn" @click="registerUser"> Registrar </el-button>
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
    registerUser() {
      this.$router.push({
        name: "User",
        query: { name: this.name, nickname: this.nickname },
      });
    },
  },
};
</script>
<style scoped>
.input {
  margin-bottom: 16px;
}

.btn {
  width: 100%;
}
</style>


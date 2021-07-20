<template>
  <el-row type="flex" justify="center">
    <el-col>
      <div v-pre>
        <h1 v-show="false">Esto no se deberia ver</h1>
        <p>{{ message }}</p>
      </div>
      <p v-cloak>{{ message }}</p>
      <p v-once>{{ message }}</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    message: "El mensaje es...",
  }),
};
</script>
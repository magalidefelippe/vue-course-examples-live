<template>
  <el-row justify="center">
    <el-col :span="12">
      <h1>Cuenta: {{ totalCount }}</h1>
      <el-button type="primary" @click="incrementCount"> Sumar </el-button>
      <el-button type="warning" @click="decrementCount"> Restar </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    totalCount: 0,
    beforeValue: null,
    actualValue: 0,
  }),

  methods: {
    incrementCount() {
      this.totalCount++;
    },

    decrementCount() {
      this.totalCount--;
    },
  },

  watch: {
    totalCount: function () {
        alert('Estas modificando el valor')
    },
  },
};
</script>

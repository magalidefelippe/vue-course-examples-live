<template>
  <div>
      <el-button @click="sayHello" type="primary" style="margin: 10px">
          Click me
      </el-button>
      <h1>{{message}}</h1>
      <h2>{{secondMessage}}</h2>
  </div>
</template>

<script>
export default {
    data: () => ({

    }),

    props: {
        message: {
            default: "Valor por default",
            type: String
        },
        secondMessage: {
            default: "Valor del segundo message",
            type: String
        }
    },

    methods: {
        sayHello(){
            alert(this.message)
        }
    }

};
</script>

<template>
  <div>
      <el-button @click="sayHello" type="primary" style="margin: 10px">
          Click me
      </el-button>
      <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
    data: ()=> ({

    }),

    props: ['message'],

    methods: {
        sayHello(){
            alert(this.message)
        }
    }

};
</script>

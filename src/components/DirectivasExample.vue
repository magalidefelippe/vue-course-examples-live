<template>
   <el-row type="flex" justify="center">
        <el-col :span="6"> 
            <el-button @click="changeTheVisibilityOfTheMessage" type="primary">
              <p v-show="!show">Click me to show the message</p>  
              <p v-show="show">Click me to hidde the message</p> 
            </el-button>
        </el-col>
        <el-col :span="6"> <h1 v-show="show">El mensaje secreto es: ...</h1> </el-col>
    </el-row>
</template>

<script>
export default {
    data: ()=>({
        show: false
    }),

    methods: {
        changeTheVisibilityOfTheMessage(){
            this.show = !this.show;
        }
    }
}
</script>
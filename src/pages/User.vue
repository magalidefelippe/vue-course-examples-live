<template>
  <div>
    <h1>{{name}}</h1>
    <h1>{{nickname}}</h1>
  </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        nickname: ''
    }),

    mounted(){
        this.name = this.$route.query.name;
        this.nickname = this.$route.query.nickname;
    }
};
</script>

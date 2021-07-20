<template>
  <div>
    {{ messageToRevert.split("").reverse().join("") }}
    <h1>{{ messageReverted }}</h1>
    <h3>{{ revertMessage() }}</h3>
  </div>
</template>

<script>
export default {
    
  data: () => ({
    messageToRevert: "Hola como andan?",
  }),

  computed: {
    messageReverted: function () {
      return this.messageToRevert.split("").reverse().join("");
    },
  },

  methods: {
    revertMessage() {
      return this.messageToRevert.split("").reverse().join("");
    },
  },
};
</script>


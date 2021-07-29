<template>
  <div>
    <el-dialog
      title="Tips"
      :visible.sync="visibility"
      width="30%"
      :before-close="sayDialogClose"
    >
      <span>{{ messageToLowerCase }}</span>
      <span>{{ countFromChildren }}</span>
      <el-button @click="countFromChildren++"> Add to count </el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["visibility", "message", "count"],
  data: function () {
    return {
      countFromChildren: this.count,
    };
  },

  computed: {
    messageToLowerCase: function () {
      return this.message.toLowerCase();
    },
  },

  methods: {
    sayDialogClose() {
      this.$emit("closeDialog");
    },
  },
};
</script>

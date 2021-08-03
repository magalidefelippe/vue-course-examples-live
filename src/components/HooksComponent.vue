<template>
  <el-row type="flex" justify="center">
    <el-col>
      <div v-for="(character, index) in characters" :key="`character-${index}`">
          <p>{{character.name}}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import getCharacters from "../utils/service";

export default {
  data: () => ({
    characters: [],
  }),

  async mounted() {
    this.characters = await getCharacters();
  },
};
</script>

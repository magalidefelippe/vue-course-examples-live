<template>
  <div :class="{ dark: themeMode }">
    <h1 :style="[textRed, cursive]">Rick and morty page</h1>
    <h3 :style="{color: 'blue'}">Build by Vuejs</h3>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="2">
        <el-button @click="changeThemeMode">Change mode</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
      <el-col>
        <div
          v-for="(character, index) in characters"
          :key="`character-${index}`"
        >
          <el-col :span="4" class="cardContainer">
            <el-card class="box-card" :class="{ darkCard: themeMode }">
              <span :class="{ lightText: themeMode }">{{
                character.name
              }}</span>
            </el-card>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import getCharacters from "../utils/service";

export default {
  data: () => ({
    characters: [],
    themeMode: false,
    textRed: {
      color: "red",
    },
    cursive: {
      fontFamily: "cursive",
    },
  }),

  async mounted() {
    this.characters = await getCharacters();
  },

  methods: {
    changeThemeMode() {
      this.themeMode = !this.themeMode;
      console.log(this.themeMode);
    },
  },
};
</script>

<style lang="css" scoped>
.lightText {
  color: white;
}
.dark {
  background-color: rgb(18, 29, 39);
}
.darkCard {
  background-color: rgb(24, 64, 102);
}

.cardContainer {
  margin-top: 5%;
}

.textRed {
  color: red;
}

.cursive {
  font-family: cursive;
}
</style>
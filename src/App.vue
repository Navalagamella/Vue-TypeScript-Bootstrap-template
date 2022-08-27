<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import NavBar from "@/NAVEGACION/NAVBAR/NavBar.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>

<style>
#app {
  font-family: Verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

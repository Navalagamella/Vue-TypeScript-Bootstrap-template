<template>
  <router-link :to="routerTo">{{ displayName }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",
  props: {
    routerTo: { type: String, required: true },
    displayName: { type: String, default: "NONE" },
  },
});
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

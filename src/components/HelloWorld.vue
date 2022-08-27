<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

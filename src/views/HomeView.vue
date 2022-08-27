<template>
  <div class="home container text-center">
    <div class="row">
      <div class="col">
        <HelloWorld
          :msg="
            'Vue.js + TypeScript + Bootstrap & Icons - ' + DisplayRoute.path
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      DisplayRoute: router.currentRoute,
    };
  },
});
</script>

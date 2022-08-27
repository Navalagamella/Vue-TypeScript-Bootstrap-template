<template>
  <nav class="navMenu container-fluid sticky-top nav navbar bg-primary">
    <div class="row justify-content-between m-0 w-100 text-center">
      <NavLink
        class="col p-1"
        v-for="enlaceNavegacion in ListaNavegacion"
        :key="enlaceNavegacion.id"
        :routerTo="enlaceNavegacion.routerTo"
        :displayName="
          enlaceNavegacion.displayName ? enlaceNavegacion.displayName : 'NULL'
        "
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "./NavLink.vue";

//INTERFACES
import ListaNavegacion from "@/NAVEGACION/Nav_Interfaces_Conf";

export default defineComponent({
  name: "NavBar",
  components: { NavLink },
  data() {
    return {
      ListaNavegacion: ListaNavegacion,
    };
  },
  computed: {},
});
</script>

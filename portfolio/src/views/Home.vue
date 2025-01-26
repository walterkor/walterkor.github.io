<template>
  <div>
    <About />
    <Skill />
    <Carrer />
    <Projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "@/components/About.vue";
import Skill from "@/components/Skill.vue";
import Carrer from "@/components/Carrer.vue";
import Projects from "@/components/Projects.vue";

export default defineComponent({
  components: {
    About,
    Skill,
    Carrer,
    Projects,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

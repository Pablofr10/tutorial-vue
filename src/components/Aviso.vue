<template>
  <div class="aviso">
    {{ aviso }}
  </div>
</template>

<script setup>
import { inject } from "vue";

const aviso = inject("aviso");

const chamaAlert = () => {
  debugger;
  alert("clicou");
};

defineExpose({ aviso, chamaAlert });
</script>

<style scoped>
.aviso {
  font-size: 0.575rem;
  text-align: center;
}
</style>

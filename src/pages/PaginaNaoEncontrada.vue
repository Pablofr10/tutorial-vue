<template>
  <div>
    <h1 ref="titulo">Página não encontrada!</h1>
    <Aviso ref="avisoRef" />
    <button @click="mostraMensagem()">Chama Alert</button>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import Aviso from "../components/Aviso.vue";

const titulo = ref(null);
const avisoRef = ref(null);

onMounted(() => {
  console.log(titulo.value);
  titulo.value.style.color = "blue";
  console.log(avisoRef.value.aviso);
});

const mostraMensagem = () => {
  avisoRef.value.chamaAlert();
};

provide("aviso", "Página inválida");
</script>

<style lang="scss" scoped></style>

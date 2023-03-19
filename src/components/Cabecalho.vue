<script setup>
const nome = "Pablo Codes";
const subtitulo = '<p style="color:silver">Tutoriais Vue, .NET</p>';
</script>

<template>
  <div>
    <h1 class="titulo">{{ nome }}</h1>
    <span v-html="subtitulo"></span>
    <span v-text="subtitulo"></span>
    <span>{{ subtitulo }}</span>
  </div>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>

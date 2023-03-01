<script setup>
import Cabecalho from "./components/Cabecalho.vue";
</script>

<template>
  <NavBar></NavBar>
  <component is="NavBar"></component>
  <header>
    <Cabecalho />
    <cabecalho></cabecalho>
    <Cabecalho></Cabecalho>
  </header>

  <main></main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}
</style>

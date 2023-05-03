<script setup>
import Cabecalho from "./components/Cabecalho.vue";
</script>

<template>
  <NavBar v-once></NavBar>
  <header>
    <Cabecalho />
  </header>

  <main>
    <!-- <Usuario></Usuario> -->
    <router-view></router-view>
  </main>
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

[color-scheme="dark"] {
  background-color: black;
  color: white;
}
</style>

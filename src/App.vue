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

<style></style>

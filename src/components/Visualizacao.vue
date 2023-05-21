<script setup>
import Cabecalho from "./Cabecalho.vue";
</script>

<template>
  <NavBar v-once></NavBar>
  <header>
    <slot name="cabecalho"></slot>
  </header>

  <main>
    <!-- <Usuario></Usuario> -->
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style></style>

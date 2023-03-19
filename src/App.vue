<script setup>
import Cabecalho from "./components/Cabecalho.vue";
import ListaUsuario from "./components/ListaUsuario.vue";
import Usuario from "./components/Usuario.vue";
</script>

<template>
  <NavBar v-once></NavBar>
  <header>
    <Cabecalho />
  </header>

  <main>
    <!-- <Usuario></Usuario> -->
    <ListaUsuario></ListaUsuario>
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
</style>

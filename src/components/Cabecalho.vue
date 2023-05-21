<script setup>
import { useLogin } from "../store/login";
import { storeToRefs } from "pinia";

const store = useLogin();
const { usuarioLogado, logado } = storeToRefs(store);

const mensagem = "Aprendendo slot";

const mostraNome = () => {
  alert("Aprendendo slot");
};
</script>

<template>
  <div>
    <h1 class="titulo" v-if="logado">Bem Vindo (a) {{ usuarioLogado }}</h1>
    <slot :mensagem="mensagem" :funcao="mostraNome"></slot>
  </div>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>

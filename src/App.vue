<script setup>
import Visualizacao from "./components/Visualizacao.vue";
import Cabecalho from "./components/Cabecalho.vue";
</script>

<template>
  <Visualizacao>
    <template #footer> Rodapé página </template>
    <!-- <template v-slot:cabecalho>
      <Cabecalho>
        <template v-slot="slotProp">
          <p class="titulo">{{ slotProp.mensagem }}</p>
          <button @click="slotProp.funcao">Clique aqui</button>
        </template>
      </Cabecalho>
    </template> -->
    <router-view></router-view>
  </Visualizacao>
</template>

<style></style>

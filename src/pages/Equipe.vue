<template>
  <h1>Equipe</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}
    <button @click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="cs in cores" :key="cs">
    {{ cs }}
  </div>
</template>

<script setup>
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();

const { cargos, cores } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>

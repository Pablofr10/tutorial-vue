<template>
  <h1>Equipe</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}
    <button @click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="cs in cores" :key="cs">
    {{ cs }} <button @click="mudaCor(cs)">Mudar Cor</button>
  </div>
  <div class="painel"></div>
</template>

<script setup>
import { ref } from "vue";
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();

const corSelecionada = ref("fffff");

const mudaCor = (cor) => {
  corSelecionada.value = cor;
};

const { cargos, cores } = storeToRefs(store);
</script>

<style scoped>
.painel {
  width: 70px;
  height: 30px;
  border: 1px solid;
  background: v-bind(corSelecionada);
}
</style>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import Usuario from "./Usuario.vue";

const pessoas = ref([]);
const idsSelecao = ref([]);
const pessoasSelecionadas = ref([]);

const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  return json.data;
};

onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});

const adicionaSelecao = (evento) => {
  if (idSelecionado(evento)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== evento);
    return;
  }
  idsSelecao.value.push(evento);
};

watchEffect(() => {
  pessoasSelecionadas.value = pessoas.value.filter((x) => idSelecionado(x.id));
});

const idSelecionado = (id) => {
  return idsSelecao.value.includes(id);
};
</script>

<template>
  <div class="selecionados">
    <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">
      {{ pm.first_name }}
    </span>
  </div>
  <div class="pessoas">
    <Usuario
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :pessoa="pessoa"
      :selecao="idSelecionado(pessoa.id)"
      @selecao="adicionaSelecao"
    ></Usuario>
  </div>
</template>

<style scoped>
.selecionados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.selecionados > span {
  background: #6fd6d6;
  padding: 5px;
  font-size: 0.785rem;
  border-radius: 5px;
}
.pessoas {
  display: flex;
  flex-wrap: wrap;
}
.perfil {
  width: 150px;
  text-align: center;
}
.perfil img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}
.perfil span {
  display: block;
  font-size: 0.75rem;
}
</style>

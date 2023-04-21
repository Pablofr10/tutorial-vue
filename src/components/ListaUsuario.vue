<script setup>
<<<<<<< HEAD
import { ref, onMounted, computed } from "vue";
=======
import { ref, computed } from "vue";
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e
import Usuario from "./Usuario.vue";
import { provide } from "vue";
import { useFetch } from "../composables/fetch";

const {
  data: pessoas,
  error,
  carregando,
<<<<<<< HEAD
} = useFetch(`https://reqres.in/api/users?page=2`);
=======
} = useFetch("https://reqres.in/api/users?delay=3");
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e

const idsSelecao = ref([]);
const aviso = "Em caso de dúvidas, contate o suporte.";

<<<<<<< HEAD
onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});

=======
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e
const adicionaSelecao = (evento) => {
  if (idSelecionado(evento)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== evento);
    return;
  }
  idsSelecao.value.push(evento);
};

<<<<<<< HEAD
const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((x) => idSelecionado(x.id));
});

=======
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e
const idSelecionado = (id) => {
  return idsSelecao.value.includes(id);
};

const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((x) => idSelecionado(x.id));
});

provide("aviso", aviso);
</script>

<template>
  <div class="selecionados">
    <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">
      {{ pm.first_name }}
    </span>
  </div>
<<<<<<< HEAD
  <div v-if="carregando">
    <h3>Carregando...</h3>
  </div>
  <div class="pessoas" v-else>
=======
  <div class="pessoas" v-if="!carregando">
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e
    <Usuario
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :pessoa="pessoa"
      :selecao="idSelecionado(pessoa.id)"
      @selecao="adicionaSelecao"
      v-if="!error"
    ></Usuario>
<<<<<<< HEAD
    <div v-else>
      {{ error }}
    </div>
=======
    <div v-else>{{ error }}</div>
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e
  </div>
  <div v-else>Carregando...</div>
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

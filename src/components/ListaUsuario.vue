<script setup>
import { ref, onMounted, computed } from "vue";
import Usuario from "./Usuario.vue";
import { provide } from "vue";
import { useFetch } from "../composables/fetch";
import { useRouter } from "vue-router";
import Alerta from "./Alerta.vue";

const router = useRouter();

const mostraAlerta = ref(false);

const {
  data: pessoas,
  error,
  carregando,
} = useFetch(`https://reqres.in/api/users?page=2`);

const idsSelecao = ref([]);
const aviso = "Em caso de dúvidas, contate o suporte.";

const adicionaSelecao = (evento) => {
  if (idSelecionado(evento)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== evento);
    return;
  }
  mostraAlerta.value = true;
  idsSelecao.value.push(evento);
};

const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((x) => idSelecionado(x.id));
});

const idSelecionado = (id) => {
  return idsSelecao.value.includes(id);
};

const redirecionaFuncionario = (id) => {
  router.push(`/equipe/${id}`);
};

provide("aviso", aviso);
</script>

<template>
  <div :class="lista.selecionados">
    <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">
      {{ pm.first_name }}
    </span>
  </div>
  <div v-if="carregando">
    <h3>Carregando...</h3>
  </div>
  <div :class="lista.pessoas" v-else>
    <div v-for="pessoa in pessoas" :key="pessoa.id" v-if="!error">
      <button class="botao" @click="redirecionaFuncionario(pessoa.id)">
        Ver funcionário
      </button>
      <Usuario
        :pessoa="pessoa"
        :selecao="idSelecionado(pessoa.id)"
        @selecao="adicionaSelecao"
      ></Usuario>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
  <Teleport to="#alerta">
    <transition>
      <Alerta v-if="mostraAlerta"></Alerta>
    </transition>
  </Teleport>
</template>

<style module="lista">
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
  justify-content: center;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

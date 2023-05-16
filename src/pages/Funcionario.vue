<template>
  <div>
    <div v-if="carregando">Carregando...</div>
    <Usuario :pessoa="pessoa" v-else></Usuario>
    <select v-model="cargoSelecionado">
      <option disabled value="">Selecione o cargo</option>
      <option v-for="c in cargos" :value="c" :key="c">{{ c }}</option>
    </select>
    <div>
      <button
        :class="funcionario.botaoLogin"
        @click="storeLogin.logarUsuario(pessoa.first_name)"
      >
        Logar
      </button>
    </div>
    <div>
      <button :style="style" @click="buscaCores()">Busca Cores</button>
    </div>
  </div>
</template>

<script setup>
import Usuario from "../components/Usuario.vue";
import { useFetch } from "../composables/fetch";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useCargos } from "../store/cargos";
import { useLogin } from "../store/login";

const store = useCargos();
const storeLogin = useLogin();

const style = "color: blue; padding: 5px;";

const { adicionaCargo, buscaCores } = store;

const router = useRoute();

const id = router.params.id;

const cargoSelecionado = ref("");
const botaoLogin = ref(" botao-login");
const botao = ref("botao");

const cargos = ["Gerência", "Supervisão", "Operacional"];

const { data: pessoa, carregando } = useFetch(
  `https://reqres.in/api/users/${id}`
);

watch(cargoSelecionado, (novoCargo) => {
  const { id, first_name: nome } = pessoa.value;
  const funcionario = { id, nome, cargo: novoCargo };
  adicionaCargo(funcionario);
});
</script>

<style module="funcionario">
.botaoLogin {
  background: #57bf3e;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import Usuario from "./Usuario.vue";

const pessoas = ref([]);

const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  return json.data;
};

onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});
</script>

<template>
  <div class="pessoas">
    <Usuario
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :pessoa="pessoa"
    ></Usuario>
  </div>
</template>

<style scoped>
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

<script setup>
import { ref, onMounted } from "vue";

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
    <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
      <h3 style="color: red" v-if="pessoa.first_name === 'George'">Gerente</h3>
      <h3 style="color: yellow" v-else-if="pessoa.first_name === 'Rachel'">
        Supervisora
      </h3>
      <h3 style="color: blue" v-else>Operacional</h3>
      <img :src="pessoa.avatar" alt="Perfil" />
      <strong>{{ pessoa.first_name }}</strong>
      <span style="font-size: 10px">{{ pessoa.email }}</span>
    </div>
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

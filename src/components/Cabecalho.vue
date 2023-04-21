<script setup>
import { computed } from "vue";
import { useFetch } from "../composables/fetch";
<<<<<<< HEAD
const { data } = useFetch(`https://reqres.in/api/users/3`);
=======
const { data } = useFetch("https://reqres.in/api/users/2");
>>>>>>> 0bb112d070146f392998a1db906f536f69a52c6e

const nome = computed(() => {
  if (!data.value) return "";
  return `${data.value.first_name} ${data.value.last_name}`;
});
</script>

<template>
  <div>
    <h1 class="titulo">{{ nome }}</h1>
  </div>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>

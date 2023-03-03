<script setup>
import { reactive } from "vue";
// const nome = ref("Pablo Codes");
// const dataNascimento = ref(0);
// const idade = ref(25);

// console.log(idade.value);

// idade.value = 27;

// console.log(idade.value);

const pessoa = reactive({
  nome: "",
  dataNascimento: 0,
  idade: 0,
});

console.log(pessoa.idade);

pessoa.idade = 27;

console.log(pessoa.idade);
</script>

<template>
  <div>
    <form class="formulario">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" v-model="pessoa.nome" /><br />
      <label for="dataNascimento">Data Nascimento:</label><br />
      <input
        type="number"
        id="dataNascimento"
        name="dataNascimento"
        v-model="pessoa.dataNascimento"
      /><br />
    </form>
  </div>

  <p style="text-align: center">
    {{ pessoa.nome }} nasceu em {{ pessoa.dataNascimento }}
  </p>
</template>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}
</style>

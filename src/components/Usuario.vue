<script setup>
import { ref } from "vue";
const nome = ref("Pablo Codes");
const dataNascimento = ref(0);
const idade = ref(0);
const idadeFutura = ref(0);

const calcularIdade = () => {
  idade.value = 2023 - dataNascimento.value;
};

const calcularIdadeParametro = (valor) => {
  debugger;
  idadeFutura.value = idade.value + valor;
};
</script>

<template>
  <div>
    <form class="formulario">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" v-model="nome" /><br />
      <label for="dataNascimento">Data Nascimento:</label><br />
      <input
        type="number"
        id="dataNascimento"
        name="dataNascimento"
        v-model="dataNascimento"
      /><br />
    </form>
  </div>

  <button class="botao" v-on:click="calcularIdade">Calcula idade</button>
  <p style="text-align: center">{{ nome }} tem {{ idade }}</p>
  <button class="botao" v-on:click="calcularIdadeParametro(2)">+2</button>
  <p style="text-align: center">{{ nome }} tem {{ idadeFutura }}</p>
</template>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}

.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
.botao:hover {
  background: rgb(102, 147, 147);
}
</style>

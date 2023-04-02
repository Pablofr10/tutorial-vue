<script setup>
defineProps({
  pessoa: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      first_name: "",
      last_name: "",
      avatar: "",
      email: "",
    }),
  },
});
</script>

<template>
  <div class="perfil">
    <img :src="pessoa.avatar" alt="Perfil" />
    <strong>{{ pessoa.first_name }}</strong>
    <span>{{ pessoa.email }}</span>
  </div>
</template>

<style scoped>
.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: default;
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

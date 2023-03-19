<template>
  <nav>
    <span>Tutorial Vue</span>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a href="#">{{ menu.nome }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menus = [
  { id: 1, nome: "Home" },
  { id: 2, nome: "Sobre" },
  { id: 3, nome: "Login" },
];
</script>

<style scoped>
nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cae7e8;
}
ul {
  display: flex;
  list-style-type: none;
}
ul li {
  padding: 0 5px;
}
ul li a {
  text-decoration: none;
  color: #117177;
}
</style>

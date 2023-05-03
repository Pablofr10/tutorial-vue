<template>
  <nav>
    <span>Tutorial Vue</span>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <router-link :to="menu.path">{{ menu.nome }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menus = [
  { id: 1, nome: "Home", path: "/" },
  { id: 2, nome: "Equipe", path: "/equipe" },
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

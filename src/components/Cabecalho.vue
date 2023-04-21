<script setup>
import { computed } from "vue";
import { useFetch } from "../composables/fetch";
import { useDark, useToggle, useFullscreen, useMediaQuery } from "@vueuse/core";
import { UseFullscreen } from "@vueuse/components";
const { data } = useFetch(`https://reqres.in/api/users/3`);

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

const { toggle } = useFullscreen();

const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const tipoTela = computed(() => (isLargeScreen.value ? "Desktop" : "Mobile"));

const nome = computed(() => {
  if (!data.value) return "";
  return `${data.value.first_name} ${data.value.last_name}`;
});
</script>

<template>
  <UseFullscreen v-slot="{ toggle }">
    {{ tipoTela }}
    <div>
      <h1 class="titulo">{{ nome }}</h1>
    </div>
    {{ isDark }}
    <button @click="toggleDark()">Muda tema</button>
    <button @click="toggle()">Full Screen</button>
  </UseFullscreen>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>

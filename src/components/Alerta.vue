<template>
  <div class="alert">
    <label>
      <input type="checkbox" class="alertCheckbox" autocomplete="off" />
      <div class="alert success">
        <span class="alertClose" @click="$emit('fecharAlerta')">X</span>
        <span class="alertText">Usuário selecionado <br class="clear" /></span>
      </div>
    </label>
  </div>
</template>

<script setup>
defineEmits(["fecharAlerta"]);
</script>

<style scoped>
.alert {
  margin-top: 10px;
  position: absolute;
  top: 10;
  left: 0;
  width: 300px;
  height: auto;
  padding: 10px;
  margin: 10px;
  line-height: 1.8;
  border-radius: 5px;
  cursor: hand;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 400;
}

.alertCheckbox {
  display: none;
}

:checked + .alert {
  display: none;
}

.alertText {
  display: table;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
}

.alertClose {
  float: right;
  padding-top: 5px;
  font-size: 10px;
}

.clear {
  clear: both;
}

.success {
  background-color: rgb(136, 231, 195);
  border: 1px solid rgb(114, 213, 195);
  color: rgb(46, 73, 65);
}
</style>

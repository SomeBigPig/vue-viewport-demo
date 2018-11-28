<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.radius-border {
  position: relative;
}

.radius-border::after {
  content: "";
  pointer-events: none; /* 防止点击触发 */
  box-sizing: border-box;
  position: absolute;
  width: 200%;
  height: 200%;
  left: 0;
  top: 0;
  border-radius: 8px;
  border:1px solid #999;
  -webkit-transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform: scale(0.5);
  transform-origin: 0 0;
}
</style>

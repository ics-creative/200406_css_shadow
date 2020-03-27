<template>
  <div id="app">
    <PerformanceTest />
  </div>
</template>

<script>
import PerformanceTest from './components/PerformanceTest'

export default {
  name: 'App',
  components: {
    PerformanceTest
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>

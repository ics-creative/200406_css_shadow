<template>
  <div id="app">
    <MixedSample v-if="false" />
    <ShadowVar v-if="true" />
    <AnimPerformance v-if="true" />
    <ShadowTest></ShadowTest>
  </div>
</template>

<script>
import AnimPerformance from './components/AnimPerformance'
import ShadowVar from './components/ShadowVar'
import MixedSample from './components/MixedSample'
import ShadowTest from './components/ShadowTest'

export default {
  name: 'App',
  components: {
    AnimPerformance,
    ShadowVar,
    MixedSample,
    ShadowTest
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

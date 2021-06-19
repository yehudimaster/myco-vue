<template>
  <footer>
    <span>By VoidConcept @ <a href="//vuejs.org">Vue.js</a> Galicia</span>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  box-sizing: border-box;
  background-color: #cfd8dc;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;

  a {
    text-decoration: none;
    color: #546e7a;
  }
}
</style>

<template>
  <router-link
    class="board-card"
    :to="{ name: 'Board', params: { name, id }}">
     <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .board-card {
    background-color: #546E7A;
    color: #fafafa;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
                0 2px 5px 0 rgba(49,49,93,.1),
                0 1px 2px 0 rgba(0,0,0,.08);
    text-decoration: none;
    padding: 1rem;
    margin: 0 0.5rem 1.5rem;
    text-align:left;
    transition: all 600ms ease;
    width:100%;
    height:100%;

      &-title {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: #90a4ae;
        font-weight: bold;
      }

      @media screen and (min-width: 600px) {
        width:33%;
      }

      @media screen and (min-width: 1024px) {
        width:250px;
      }
  }
</style>

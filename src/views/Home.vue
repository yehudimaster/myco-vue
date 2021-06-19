<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <span v-if="fetchingData">Cargando...</span>
      <input
        type="text"
        placeholder="Añadir un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />

      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      />
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: { BoardCard },
  data: function () {
    return {
      boardName: ''
    }
  },
  computed: {
    ...mapState(['boards', 'fetchingData'])
  },
  created () {
    this.fetchBoards({ user: 1 })
    console.log('CREATED ' + this.fetchBoards({ user: 1 }))
  },
  methods: {
    ...mapActions(['fetchBoards', 'addBoard']),
    add () {
      // this.boards.push({ name: this.boardName })
      this.addBoard({ name: this.boardName })
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin: 1.4rem;
}

.boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}

input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;

  &:focus,
  &:active {
    background-color: white;
    color: #546e7a;
  }

  &::placeholder {
    color: white;
  }
}
</style>

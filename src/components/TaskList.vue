<template>
    <ul>
        <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }">
            {{ task.title }}
        </li>
        <input
            type="text"
            placeholder="Añade una nueva tarea"
            v-model="title"
            @keyup.enter="add()"
        />
    </ul>
</template>

<script>

export default {
  name: 'task-list',
  props: {
    tasks: Array
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    add () {
      // TODO: Implement event. No vamos a emitir este evento hacie arriba para utilizar VUEX y su gestión de estados
    }
  }
}
</script>

<style lang="scss" scoped>
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
        background-color: #FAFAFA;
        border-radius: 3px;
        border-bottom: 1px solid #CCC;
        margin: .25rem 0;
        padding: 1rem;

        &.completed {
            background-color: #cfd8dc;
            color: #90a4ea;
        }
    }

    input {
        box-sizing: border-box;
        background-color: #eceff1;
        border:none;
        border-radius: 3px;
        font-size:1rem;
        margin:.5rem;
        outline: 0;
        padding: .75rem 0;
        transition: background-color 600ms ease;
        width:100%;

            &:focus,
            &:active {
                background-color: #fafafa;
                border-bottom: 1px solid #CCC;
                margin: .25rem 0;
                padding:1rem;
            }

            &::placeholder {
                color:#98a4ae;
            }
    }
</style>

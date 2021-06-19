import * as types from './mutations-types'
/**
 * Aquí no se llama a firebase, aquí simplemente se cambia el estado, la memoria del front.
 * Eso lo haremos en las acciones, actions.js
 */
export default {
  // Fetch de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_BOARDS_SUCCESS] (state, { board }) {
    state.fetchingData = false
    state.error = null
    state.boards = { ...board } // Añadimos nuevos boards a los existentes (...boards)
  },
  [types.FETCH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },
  // Fetch de las listas creadas por el usuario
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_LISTS_SUCCESS] (state, { list }) {
    state.fetchingData = false
    state.error = null
    state.lists = { ...list }
  },
  [types.FETCH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },
  // Fetch de las tareas creadas por el usuario
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
    state.fetchingData = false
    state.error = null
    state.tasks = Object.assign({}, state.tasks, tasks)
  },
  [types.FETCH_TASKS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },
  // Crear un nuevo board
  [types.ADD_BOARD] (state, { board }) {
    state.boards[board.id] = board
  },
  // Crear una nueva list
  [types.ADD_LIST] (state, { column }) {
    state.lists[column.id] = column
  },
  // Crear una nueva task
  [types.ADD_TASK] (state, { task }) {
    state.tasks[task.id] = task
  },
  // Borrar una task
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks).filter(task => task.id !== taskId)
  },
  // Cambiar el completado
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed
  }
}

import * as types from './mutations-types'
import API from '@/api/index.js'

export default {
  // Fetch vía ajax de los paneles (boards) del usuario
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)
    API.getBoardsByUser(user)
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { board: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },
  // Fetch vía ajax de las listas del usuario
  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)
    API.getListsFromBoard(board)
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { list: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },
  // Fetch vía ajax de las tareas de una lista
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)
    API.getTasksFromList(list)
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }))
  },
  // Aadir un nuevo panel
  addBoard ({ commit }, { name }) {
    API.postBoard(name).then(board => commit(types.ADD_BOARD, { board }))
  },
  addColumn ({ commit }, { board, name }) {
    API.postList(board, name).then(column => commit(types.ADD_LIST, { column }))
  },
  addTask ({ commit }, { list, name }) {
    API.postTask(list, name).then(task => commit(types.ADD_TASK, { task }))
  },
  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId).then(() => commit(types.DELETE_TASK, { taskId }))
  },
  markAsCompleted ({ commit }, { task }) {
    API.completeTask(task.id).then(() =>
      commit(types.MARK_AS_COMPLETED, { task })
    )
  }
}

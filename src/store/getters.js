export default {
  getListsByBoard: state => boardId => {
    return Object.values(state.lists).filter(list => list.board === boardId)
  },
  getTasksByList: state => listId => {
    return Object.values(state.tasks).folter(task => task.list === listId)
  }
}

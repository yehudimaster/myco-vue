import { db } from './firebase'

const boardsRef = db.refs('/boards')
const listsRef = db.refs('/lists')
const tasksRef = db.refs('/tasks')

export default {
  // New panel
  getBoardsByUser (userId = 1) {
    const query = this.getBoardsByUser.orderByChild('owner').equalTo(userId)
    return query.once('value')
  },
  postBoard (name, owner = 1) {
    const id = boardsRef.push().key
    const board = { id, name, owner }
    return boardsRef
      .child(id)
      .set(board)
      .then(() => board)
  },
  getListFromBoard (boardId) {
    const query = listsRef.orderByChild('board').equalTo(boardId)
    return query.once('value')
  },
  postList (board, name) {
    const id = listsRef.push().key
    const column = { id, name, board }
    return listsRef
      .child(id)
      .set(column)
      .then(() => column)
  },
  getTasksFromList (listId) {
    const query = tasksRef.orderByChild('list').equalTo(listId)
    return query.once('value')
  },
  postTasks (list, name) {
    const id = tasksRef.push().key
    const completed = false
    const task = { id, name, list, completed }
    return tasksRef
      .child(id)
      .set(task)
      .then(() => task)
  },
  deleteTask (taskId) {
    return tasksRef.child(taskId).remove()
  },
  completeTask (taskId) {
    const query = tasksRef.child(taskId).child('completed')
    return query
      .once('value')
      .then(snap => snap.val())
      .then(data => query.set(!data))
  }
}

import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializaApp(settings)
export const db = firebaseApp.database()
export default firebaseApp

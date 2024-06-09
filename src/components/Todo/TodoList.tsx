import {useSelector} from 'react-redux'
import {TodoItemTypes } from '../../Types/Types'
import {TodoItem } from './TodoItem' 
import styles from '../Todo/TodoItem.module.scss'

const TodoList =()=>{
  const todos= useSelector(state=>(state as {todos:{todos:TodoItemTypes[]}}).todos.todos)
  return  <ul className={styles.list}>
{
todos.map((todo:TodoItemTypes)=><TodoItem key={todo.id} {...todo}/>)
}
    </ul>
}
export default TodoList
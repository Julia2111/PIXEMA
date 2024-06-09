import { useDispatch } from "react-redux"
import { TodoItemTypes} from "../../Types/Types"
import { removeTodo, toggleTodo } from "../../store/todosSlice"
import styles from '../Todo/TodoItem.module.scss'

const TodoItem =({id,title,completed}:TodoItemTypes)=>{
    const dispatch =useDispatch()
    return (
    <li className={styles.wrapTodo}>
        <input type='checkbox' checked={completed} onChange={()=>dispatch(toggleTodo({id}))}/>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <button onClick={()=>dispatch(removeTodo({id}))}>Delete</button>
    </li>)
}
export  {TodoItem}
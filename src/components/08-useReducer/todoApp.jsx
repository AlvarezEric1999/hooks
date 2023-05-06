import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
// import { TodoList } from "./TodoList";
// import { TodoAdd } from "./TodoAdd";
import { TodoAdd ,TodoItem ,TodoList} from './index'


    const initialState = [];


    const init  = ()=> {
        return JSON.parse(localStorage.getItem('todos') || [] ) 
    }

export const TodoApp = () => {




    const [todos, dispatch] = useReducer(todoReducer,initialState,init)


    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    // 
    
    const handleNewTodo = (todo)=> {
        console.log(todo)
        
        const action = {
            type:'[TODO] add Todo',
            payload:todo
        }
        
        dispatch(action)
        
        
    }
    
    console.log(todos)


    return(
        <>
        
        <h1>todo app:{todos.length} | <small>pendientes:2</small></h1>

        <hr></hr>

        <div className="row">
          <div className="col-7">

            {/*TodoList*/}
            <TodoList todos={todos}/>

          </div> 



          <div className="col-5">

          <h4>agregar todo</h4>
          <hr></hr>
           {/*TodoAdd*/}
           <TodoAdd handleNewTodo={(e)=>handleNewTodo(e)}/>
          
           </div>
        
      </div>

        </>

    )
}
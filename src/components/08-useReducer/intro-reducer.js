const initialState = [{
        id:1,
        todo:'recolectar la gema del alma',
        done:false
    }];

    // todo:estado inicial



// todo:funcion 
    const todoReducer = (state = initialState, action ={})=> {

        if(action.type ==='[TODO] add todo'){
            return [...state,action.payload]
        }
        return state;

    }

    let todos = todoReducer()

    // todo:nuevo valor
    const newTodo = {
        id:2,
        todo:'recolectar la piedra del poder',
        done:false
    }
    

    // todo:funcion modificadora
    const addTodoAction = {
        type:'[TODO] add todo',
        payload:newTodo
    }
    
    todos = todoReducer(todos,addTodoAction)
    console.log(todos)
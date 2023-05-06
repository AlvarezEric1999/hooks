
export const TodoItem = ({todos}) => {
  console.log(todos)
  return (
     <li className="list-group-item d-flex justify-content-between">
      
      <span className="align-self-center">{todos.description}</span> 
    
     <button className="btn btn-danger">borrar</button></li>
        
    
  )
}

import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleNewTodo}) => {



    const { description,onInputChange,resetForm} = useForm({
        
        description:''

    })


  // console.log(description)


    


    const onSubmit = (event)=> {
        event.preventDefault();

        if(description.lenght <= 1 ) return;
        

        const newTODO={
            id:new Date().getTime(),
            done:false,
            description:description

        }



        handleNewTodo({newTODO})

    }


// console.log(newTODO)

  return (
    <form onSubmit={(e)=>{onSubmit(e)}}>
           
           <input
            type="text"
            placeholder="¿que hay que hacer?"
            className="form-control"
            onChange={(event)=>onInputChange(event)}
            name='description'
            value={description}
            >
           </input>
           

           <button type="submit"
                   className="btn btn-outline-primary mt-1"
                    // onClick={}
                   >agregar</button>
           
           
           </form>

  )
}

import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [ formState , setFormState] = useState({
        username:'strider',
        email:'fernando@google.com'
    })

    const {username ,email} = formState;


    const onInputChange = ({target})=> {

        const { name ,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }


    useEffect(()=>{
        // console.log('useEffect called')
    },[])


    useEffect(()=>{
        // console.log('formstate called')
    },[formState])


    useEffect(()=>{
        // console.log('Email  called')
    },[email])

     
    return (
        <>
        <h1>formulario simple</h1>
        <hr></hr>
        
        <input type="text" 
                className="form-control" 
                placeholder="username" 
                name="username" value={username} 
                onChange={onInputChange}></input>
        
        <input type="email" 
                className="form-control mt-2" 
                placeholder="fernando@google.com" 
                name="email" 
                value={email} 
                onChange={onInputChange}></input>


         {

            (username === 'strider2') && <Message/>
 
         }


        </>
    )
}
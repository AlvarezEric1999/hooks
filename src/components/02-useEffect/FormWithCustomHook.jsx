import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"
// import { Message } from "./Message";

export const FormWithCustomHook = () => {


    const {formState ,onInputChange, resetForm} = useForm({
            username:'',
            email:'',
            password:''
        })

    // const [ formState , setFormState] = useState({
    //     username:'',
    //     email:'',
    //     password:''
    // })

    const {username ,email,password} = formState;


    // const onInputChange = ({target})=> {

    //     const { name ,value} = target;
    //     setFormState({
    //         ...formState,
    //         [name]:value
    //     })
    // }




    // useEffect(()=>{
    //     // console.log('useEffect called')
    // },[])


    // useEffect(()=>{
    //     // console.log('formstate called')
    // },[formState])


    // useEffect(()=>{
    //     // console.log('Email  called')
    // },[email])

     
    return (
        <>
        <h1>form with custom hook </h1>
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
        
        
        <input type="password" 
                className="form-control mt-2" 
                placeholder="password" 
                name="password" 
                value={password} 
                onChange={onInputChange}></input>


         {

            (username === 'strider2') && <Message/>
 
         }



         <button onClick={resetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}
import { useRef } from "react"

export const FocusScreen = ()=>{


    const inputRef = useRef()

    const onClick = () =>{

        console.log(inputRef)
        inputRef.current.select();
    } 


    return(

        <>
            <h1>Focus Screen</h1>
            <hr></hr>

            <input type="text" placeholder="ingrese su nombre" className="form-control" ref={inputRef}>
            </input>
        

            <button className="btn btn-primary mt-2" onClick={onClick}>
            set focus
            </button>

        </>

    )
}
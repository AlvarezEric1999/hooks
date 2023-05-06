import { useEffect } from "react"
import { useState } from "react"

export const Message = () => {


  const [coors , setCoors] = useState({
    x:0,
    y:0
  })



    useEffect(() => {

        // console.log('message mounted')


      // se ejecuta cuandi se monta el componente 
        const onMouseMove = (event)=>{
          const {x , y} = event
          console.log(x,y);
          setCoors({x , y })
        }
        window.addEventListener('mousemove',onMouseMove )



        // limpieza del componente
        return () => {
           window.removeEventListener('mousemove',onMouseMove)
        };
    }, [])





    

  return (
    <>
    
    <h3>usuario ya existe</h3>
    {
      JSON.stringify(coors)
    }
    
    </>
  )
}

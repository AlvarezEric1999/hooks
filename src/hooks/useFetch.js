import { useEffect, useState } from "react"

export const useFetch = (url)=>{


    const [dataState, setDataState] = useState({

        data:null,
        isloading:true,
        haserror:null
    })

    

    const GetFetch = async ()=> {


        setDataState({
            ...dataState,
            isloading:true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        // setIsloading(!isloading)

        console.log(data);

        setDataState({
            data,
            isloading:false,
            haserror:null
        })

    }



   // Para hacer una petición a una api con fetch
   //Usa el siguiente método
    
    const data = async () => {
      const req = await fetch("http://api/name")
      const res = req.json()
      return res;
    }
    // Así haces una petición a una api
    // Att: watercubz 
     


    useEffect(()=>{
        GetFetch();
    },[url]);


    return {

        data:dataState.data,
        isloading:dataState.isloading,
        haserror:dataState.haserror

    }

}

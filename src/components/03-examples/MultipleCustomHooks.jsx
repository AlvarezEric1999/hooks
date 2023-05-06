// import { useCounter } from "../../hooks/useCounter"
// import { useFetch } from "../../hooks/useFetch"

import { useCounter, useFetch } from '../../hooks/archivo_de_barril';
// import { LoadingQuote } from './LoadingQuote';
// import {Quote} from './Quote'
import { LoadingQuote,Quote } from './index';
export const MultipleCustomHooks = () => {


    const { counter,increment} = useCounter(1)
    

    const API = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const {data,isloading,haserror} = useFetch(API)

   const { quote ,author} = !!data && data[0]
    

//    console.log(quote,author)
    
    
    return (
        <>
        
        <h1>Breaking Bad Quotes </h1>

        <hr></hr>
        {
            (isloading) 
            ?  <LoadingQuote/>
            :<Quote author={author} quote={quote} />
        }

       


        <button className="btn btn-primary" onClick={()=>increment(1)} disabled={isloading}> Next quote </button>


        
        </>
    )
}
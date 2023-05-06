import { useCounter} from '../../hooks/archivo_de_barril'
import { Small } from './Small'


export const Memorize = () => {

    const {counter , increment } = useCounter(0)

  return (
    <>
        <h1>Counter: <Small value= {counter}/> </h1>

        <hr></hr>

        <button className="btn btn-primary" onClick={()=> increment(1)}>+1</button>
    
    </>
  )
}


import { useFilterMove } from '../hooks/useFilterMove'
import './styles/movements.css'
export function Movements ({data}){
  
  const filteredData = useFilterMove(data)  
  if(filteredData === undefined){
    return <div>cargando...</div>
  }
  console.log(typeof filteredData, 'sad');

  return(
    <table className='table-of-movements'>
      {filteredData.map((movesTypes, i)=>(
        
        <td key={i}>
         <th>{movesTypes[0]}</th>
           {movesTypes.map((move, i)=>(
            <tr className="move" key={i}>
              {i!== 0 ? move:false}
            </tr>
          ))} 
        </td>
        
      ))}
      </table>
  )
}
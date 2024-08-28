/* eslint-disable react/prop-types */
import './styles/types.css'
export function Types({data}){
  return(
    <div className="types">
      {
        data.map((type, i)=>(
          <div className={type.type.name} key={i}>
            <a href=''>{type.type.name}</a>
          </div>
        ))
      }
    </div>
  )
}
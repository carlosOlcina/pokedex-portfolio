// eslint-disable-next-line react/prop-types
export function Abilities ({data}){
  const normalabilities =  data.filter((ability)=> ability.is_hidden === false)
  const hiddenabilities =  data.filter((ability)=> ability.is_hidden === true)
  return(
    <section className="container-of-habilities">
    <div className="container-group">
      <h4 className='title-of-abilities'>Normal abilities</h4>
      <hr className='separation-of-abilities'/>
      <div className="abilities">
        {
          normalabilities.map((normalability, i)=>(
            <div className="ability" key={i}>
              <a href="">{normalability.ability.name}</a>
            </div>
          ))
        }
    </div>
    {/* habilidades ocultas */}
    </div>
    <div className="container-group">
     <h4 className='title-of-abilities'>Hidden abilities</h4>
      <hr className='separation-of-abilities'/>
      <div className="abilities">
        {
          hiddenabilities.map((hiddenability, i)=>(
            <div className="ability" key={i}>
              <a href="">{hiddenability.ability.name}</a>
            </div>
          ))
        }
      </div>
    </div>
    
  </section>
  )
}
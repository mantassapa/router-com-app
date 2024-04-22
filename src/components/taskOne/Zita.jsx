import React from 'react' 
// import { zitosVeikla } from '../../data/data'
import { Link, Routes, NavLink, useParams } from 'react-router-dom'

const Zita = ({zitosVeikla}) => {
  const { id } = useParams()
  console.log(id);
  
  const findUser = zitosVeikla.find((u)=>u.id===parseInt(id))
  // console.log(findUser);

  return (
    <div>
      <h3>cia yra Zita!!!!</h3>
      {zitosVeikla.map(el=>(
        <NavLink to={`/zita/${el.id}`} key={el.id}>{el.veikla}<br /></NavLink>
      ))}
      <img src={findUser.link} alt="" />
      </div>
  )
}

export default Zita
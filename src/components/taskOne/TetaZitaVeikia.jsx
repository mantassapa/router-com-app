import React from 'react'
import { useParams } from 'react-router-dom'

const TetaZitaVeikia = ({zitosVeikla}) => {
    const {id} = useParams()

    const veikla = zitosVeikla.find((el)=>(el.id===parseInt(id)))
    console.log(zitosVeikla);
  return (
    <div>TetaZitaVeikia:
        <p>{veikla.veikla}</p>
        <img src={veikla.img} alt={veikla.veikla} />
    </div>
  )
}

export default TetaZitaVeikia
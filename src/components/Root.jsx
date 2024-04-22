import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

const Root = ({zitosVeikla}) => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/gallery'}>Gallery</Link>
            <br />
            {zitosVeikla.map(el=>(
                <NavLink to={`/tetazita/${el.id}`} key={el.id}>{el.veikla}<br /></NavLink>
            ))}
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Root
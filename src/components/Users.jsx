import React from 'react'
import { useParams } from 'react-router-dom'

const Users = ({users}) => {
    console.log(users);
    const params = useParams()
    console.log(params);

    const {id} = useParams()
    console.log(id);

    const findUser = users.find((u)=>u.id===parseInt(id))
    console.log(findUser);
  return (
    <div>hello {findUser.name}, that has id: {id}</div>
  )
}

export default Users
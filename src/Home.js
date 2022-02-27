import React from 'react'
import {useSelector} from 'react-redux';

function Home() {
    const users=useSelector(state=>state)
  return (
    <div>
        {users && users.map((elt,index)=>(<h1 key={index}>{elt.email}</h1>))}
    </div>
  )
}

export default Home
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const clientOutput = useLoaderData()

    const handleDelete = (_id) =>{
      console.log(_id)

      fetch(`http://localhost:5000/database/${_id}`,{
        method: 'DELETE',
      })
        
      .then(res => res.json())

      .then(data =>{
        console.log(data);
        if(data.deletedCount>0){
          alert('Delete Successful')
          window.location.reload();
        }
      })
    }
  return (
    <div>
      <h2 style={{color: 'red'}}>User Size: {clientOutput.length}</h2>
      <div>
        {
            clientOutput.map(sks=> <p key={sks._id} >Name: {sks.name} <button onClick={ ()=> handleDelete(sks._id)}>Delete</button> <br />
            Email: {sks.email} </p> )
        }
      </div>
    </div>
  )
}

export default Users
 
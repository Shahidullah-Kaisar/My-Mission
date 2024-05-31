
import { useEffect, useState } from 'react'
import './App.css'
function App() {

  const [users,setUsers] = useState([]) 

  useEffect(()=> {  //server to ui
    
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])


  const handleUser = event => { //data collect from  submit form
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name,email}
    console.log(user)

    fetch('http://localhost:5000/users',{ // data send ui to server
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('inside post response', data)
    })

  }

  return (
    <>
      
      <h1>User Management System</h1>
      <h3>Numbers of users: {users.length}</h3>
      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add User" />
      </form>

      {
        users.map(output => <p key={output.id}> {output.id}: {output.name} : {output.Email} </p> )
      }
      
    </>
  )
}

export default App

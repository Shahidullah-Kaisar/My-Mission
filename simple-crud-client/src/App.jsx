
import { json } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = e =>{
    e.preventDefault();
    const form =e.target;
    const name = form.name.value;
    const email = form.email.value;
    const output = {name,email}
    console.log(output)

    fetch('http://localhost:5000/database', { //client to server
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(output)
    })
    .then(res => res.json()) //client to server end

    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('successfully added')
        form.reset();
      }
    })
   }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App

             
    // Create a Server

/*const express= require('express')
const app=express()
const port = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.send('user management server is running')
})

app.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})*/


const express= require('express')

const cors = require ('cors')

const app=express()

const port = process.env.PORT || 5000

app.use(cors()); //middleware for connect vite and server
app.use(express.json()); //middleware for data send11 server from ui

const users = [ //create a object for users route
    {id: 1, name: "Kaisar", Email: "sksjuiit@gmail.com"},
    {id: 2, name: "Sajib", Email: "sksjuiit@gmail.com"},
    {id: 3, name: "Shahidullah", Email: "sksjuiit@gmail.com"},
    {id: 4, name: "Shahidullah", Email: "sksjuiit@gmail.com"}
]

app.get('/', (req,res) => {
    res.send('user management server is running')
})

app.get('/users', (req,res)=> {
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log("post api is hitting")
    console.log(req.body);
    
    const newUser = req.body;
    newUser.id= users.length + 1;
    users.push(newUser);
    res.send(newUser)

})

app.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})
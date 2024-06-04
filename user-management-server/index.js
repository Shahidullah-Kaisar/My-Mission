             
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

//OX3PD7e7EBRb4sH8 

const express= require('express')
const cors = require ('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
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


const uri = "mongodb+srv://shkaisar2002:OX3PD7e7EBRb4sH8@cluster0.hehzvom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();

      const database = client.db("FirstDatabase");
      const userCollection = database.collection("sajib");

      app.post('/database', async (req, res) => {
          try {
              const user = req.body;
              console.log('new user', user);
              const result = await userCollection.insertOne(user); // Corrected: Ensure this runs after connection is established
              res.send(result);
          } catch (err) {
              res.status(500).send(err.message);
          }
      });

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
      console.error(err);
  }
}
run().catch(console.dir);




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



/*
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Middleware for connecting Vite and server
app.use(express.json()); // Middleware for sending data to server from UI

const users = [ // Object for users route
    {id: 1, name: "Kaisar", Email: "sksjuiit@gmail.com"},
    {id: 2, name: "Sajib", Email: "sksjuiit@gmail.com"},
    {id: 3, name: "Shahidullah", Email: "sksjuiit@gmail.com"},
    {id: 4, name: "Shahidullah", Email: "sksjuiit@gmail.com"}
];

const uri = "mongodb+srv://shkaisar2002:OX3PD7e7EBRb4sH8@cluster0.hehzvom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Maintain the connection for the lifetime of the application
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        const database = client.db("FirstDatabase");
        const userCollection = database.collection("sajib");

        app.post('/database', async (req, res) => {
            try {
                const user = req.body;
                console.log('new user', user);
                const result = await userCollection.insertOne(user); // Corrected: Ensure this runs after connection is established
                res.send(result);
            } catch (err) {
                res.status(500).send(err.message);
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.error(err);
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('user management server is running');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log("post api is hitting");
    console.log(req.body);
    
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

*/
             
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
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express()

const port = process.env.PORT || 5000

app.use(cors()); //middleware for connect vite and server
app.use(express.json()); //middleware for data send11 server from ui


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
    
      await client.connect();

      const database = client.db("FirstDatabase"); //create database
      const userCollection = database.collection("sajib"); //create database collection

      app.get('/database', async(req,res)=> { //database to (server ui route) (read operation)
        const cursor = userCollection.find()
        const result = await cursor.toArray();
        res.send(result)
      })

      app.post('/database', async (req, res) => { 
          try {
              const user = req.body;
              console.log('new user', user); //client to server end

              const result = await userCollection.insertOne(user); // Create operation
              res.send(result); // server to database end
          }
          catch (err) {
              res.status(500).send(err.message);
          }
      });

      app.delete('/database/:id', async(req,res) => {
        const id = req.params.id;
        console.log('delete from database', id);

        const query = {_id : new ObjectId (id)} //delete operation
        const result = await userCollection.deleteOne(query)
        res.send(result)
      })

      
      await client.db("admin").command({ ping: 1 });// Send a ping to confirm a successful connection
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch (err) {
      console.error(err);
  }
}
run().catch(console.dir);


app.get('/', (req,res) => {
    res.send('user management server is running')
})

app.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})

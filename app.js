

const express = require('express')
const app=express()

const router=require('./routes/tasks')
const connectDb = require("./db/connect");
const notFound = require('./middleware/not-found') 
const errorHandleamiddware = require('./middleware/error-handler')
// mongo_url config
require('dotenv').config()
// middware for post mrthod
app.use(express.json());


app.use("/api/v1/tasks", router);
//middleware for html or public (front end)
app.use(express.static('public'))

app.use(notFound);
app.use(errorHandleamiddware);

const port = process.env.PORT || 3000;

const start = async ()=>{
    try {
        
        await connectDb(process.env.MONGO_URL);

        app.listen(port, () => {
          console.log(`server is listening on port ${port}`);
        });

    } catch (error) {
       console.log(error) 
    }
    
}
start()

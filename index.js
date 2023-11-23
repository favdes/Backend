const express = require('express');
const app= express();
const port = process.env.PORT || 8080;
const connect = require('./db/mongoDB');
const morgan = require('morgan')
const USER_ROLE = require('./model/userRoleModel')
const userRouter = require('./router/userRouter')
const cors = require('cors')
// const 


// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// API'S
app.use('/', userRouter)

// Home page route
app.get('/', (req, res)=>{
    res.send('Welcome Home FAVDEVS')
})

// db connection and server
connect()
    .then(()=>{
        try{
            app.listen(port,()=>{
                console.log(`server connected to http://localhost:${port}`);
            })

        }catch(error){
            console.log('cannot connect to the server');
        }
    })

    .catch((error)=>{
        console.log('invalid database connection......!',error);
    })


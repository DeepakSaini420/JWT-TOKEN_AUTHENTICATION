const http = require('http');

const mongoose = require('mongoose');

const app = require('./app')

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const { MONGO_URI } = process.env

const server = http.createServer(app);


try {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        
} catch (error) {
    console.log(error)    
}

mongoose.connection.once('connected',()=>{
    console.log('Database Connected!')
})

server.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})
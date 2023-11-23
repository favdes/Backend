const mongoose = require('mongoose');

require('dotenv/config');

const mongoDbUrl = process.env.DBURL
const connect = async()=>{
    try{
        await mongoose.connect(mongoDbUrl)
        console.log('mongoDB connected successfully');
    }catch(error){
        console.log(error);
    }

}

module.exports= connect
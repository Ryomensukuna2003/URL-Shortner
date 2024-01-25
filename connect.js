const mongoose = require('mongoose');

async function connecttoMongo(url){
    return mongoose.connect(url);
}

module.exports={
    connecttoMongo,
};
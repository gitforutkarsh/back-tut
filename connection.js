const mongoose = require("mongoose")

//connection
async function connectMongoDB(url) {
    return mongoose.connect(url)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongo error: ", err))
}

module.exports = {
    connectMongoDB, 
}
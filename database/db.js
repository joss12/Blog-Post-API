const mongoose = require("mongoose");
const {connectionUrl} = require("../config/keys")


const connectDB = async () =>{
    try {
        await mongoose.connect(connectionUrl);
        console.log(">Database connected...")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB
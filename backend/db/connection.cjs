const mongoose = require("mongoose");
require("dotenv").config(); //  This loads .env file
MONGODB_URL = "mongodb+srv://karthik:chatApp123@cluster-chat.wgesu1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-chat"
const connectToDB = async () => {
    try {
        console.log(MONGODB_URL)
        const conn = await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        console.log(" mongoDB connected ", conn.connection.host);

    } catch (error) {
        
        console.log(" mongoDB connection error ", error.message);
        process.exit();

    }
}
connectToDB()
module.exports = connectToDB
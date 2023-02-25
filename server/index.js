const express = require('express');
require('dotenv').config({path:".env"});
const ConnectToDB = require('./config/Database');
const itemRoute = require('./routes/itemRoute');
const cors = require('cors');

const app = express();
ConnectToDB();

app.use(cors({
    origin:"https://infinity-creators-client.vercel.app"
}));
app.use(express.json());
app.use('/api/v1/item',itemRoute);


app.listen(process.env.PORT,()=>{
    console.log("server started......");
});

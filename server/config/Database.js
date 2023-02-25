const mongoose = require('mongoose');

const ConnectToDB = async () =>{
    await mongoose.connect(process.env.MONGO_URI).then(resp=>{
        console.log(resp.connection.host);
    }).catch(err=>{ 
        console.log(err.message);
    })
};

module.exports = ConnectToDB;
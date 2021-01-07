const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_DB_URL, {
     useNewUrlParser: true 
    }).catch(e => {
        console.error('Error while connecting to the database', e.message)
    })

const Database = mongoose.connection

module.exports = Database;



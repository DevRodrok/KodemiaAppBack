const mongoose = require("mongoose")
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  JWT_SECRET
} = process.env

function connect (){
  return mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  
  {
    useNewUrlParser:true,
    userUnidiedTopology: true
  })
}


module.exports = {connect}
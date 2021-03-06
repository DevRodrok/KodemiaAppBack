
const mongoose = require("mongoose")

const schema =  new mongoose.Schema({
  moduleName:{
    type:String,
    enum: ['Pensamiento estructurado','Pensamiento logico','Algoritmos','Pensamiento paralelo','Pseudocodigo','Diagramas de flujo','Primeros programas con Javascript estructurado','Git','HTML5','CSS3','SASS','Bootstrap4','Javascript','Jquery','AJAX','DOM','Linux','La terminal','Modelo CLiente-Servidor','Hypermedia','REST','Clean architecture','NodeJS','ExpressJS','Bases de datos','Mongo y Mongoose','Autenticacion JWT','Cloud','React','React-router','React-Hooks','FetchAPI','Babel'],
    required: true
  },
  title:{
    type:String,
    required: true
  },
  resources: {
    type:String,
    required: true
  }
})

module.exports=mongoose.model("subjectMatter", schema)
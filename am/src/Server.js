const express = require('express')

// rest object 
const ansh = express()

//rest api

ansh.get('/',(req,res)=>{
 res.send({
    message:"welcome to ecommerce app"
 })

})

//PORT
const PORT=  8080 

//run listen

ansh.listen (PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})
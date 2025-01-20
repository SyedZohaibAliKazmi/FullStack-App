import express from 'express'

const app = express()

const port = process.env.PORT || 3000

const users = [
    { name: "Ali", age: 25, phone: "0312-1234567" },
    { name: "Sara", age: 28, phone: "0333-9876543" },
    { name: "Usman", age: 30, phone: "0300-4567890" },
    { name: "Ayesha", age: 22, phone: "0321-6543210" },
    { name: "Zain", age: 27, phone: "0345-6789012" }
  ];
app.get('/',(req,res)=>{
    res.send("Server is Ready")
})
app.get('/api/data',(req,res)=>{
res.send(users)
})
app.listen(port,()=>{
    console.log(`Port is Running on ${port}`);
    
})
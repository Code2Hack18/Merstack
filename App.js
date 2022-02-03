const express = require('express');;
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT;
app.use((require('./router/auth')));

//'mongodb+srv://Utkarsh188:hacker18@cluster0.cccde.mongodb.net/merntube?retryWrites=true&w=majority';
//Database 

require('./db/Conn');
// const User = require('./model/userSchema');

app.use(express.json());
//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello my Middleware`);
    next();
}


app.get('/', (req, res) =>{
    res.send(`Server is running...`)
});

app.get('/about', middleware, (req,res)=>{
    res.send(`About page`);
    
})
app.get('/contact', (req, res)=>{
    res.send(`Conntact page`);
})
app.get('/signin',(req,res)=>{
    res.send(`signIn Page`);
})



//Server is listining to the PORT
app.listen(PORT, ()=>{
    console.log(`Sever is runnign at port ${PORT}... `);
}); 


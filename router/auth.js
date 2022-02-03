const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Hello");
})

router.get('/register', (req, res)=>{
    console.log(req.body);
    res.json({ message: req.body });
    // res.send("Hello register");
})


module.exports = router;
const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const PORT = process.env.PORT || 5000;

// const jsonFile = fs.readFileSync('./data.json');
// let data = JSON.parse(jsonFile);

app.get("/", (req, res) => {
    res.status(200).send(data);
});

app.get('/single/:id',(req,res)=>{
    const id = req.params.id
    res.status(200).send(data.find(item =>item.id === id))
})


app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});



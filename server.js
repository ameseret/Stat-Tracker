const express = require("express");
const app = express()
const port = 3000



//Index
app.get('/players/', (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log('listenening on port', port)
})

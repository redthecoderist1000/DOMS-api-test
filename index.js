const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    // res.send('Hello World!')
    
})

app.get('/hello2', (req, res) => {
    window.location.href = "dbcon.php";
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
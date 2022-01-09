const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/services', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/agence-conseils', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
const port = process.env.PORT || 3002

app.listen(port,()=>console.log("ok"))
const express = require('express');
const app = express();
const {oprettelse} = require('automation.js');
const port = 5000

app.use(express.json())


//get request that opens TDC selvbetjening and login
app.get('/tdc-login', async (req, res) => {
    oprettelse();
    res.send('TDC login')
});

//listen on port 3000
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

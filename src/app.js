const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening to requests on port:${port}`)
})

app.set('view engine','ejs');
app.use('/assets',express.static('assets'))

app.get('/',(req,res)=>{
    res.render('index');
})
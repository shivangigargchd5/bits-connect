const express = require('express'); 
const expressLayouts = require('express-ejs-layouts');
// const user = require('./models/user');
// const db = require('./config/mongoose');
const app = express();
const port = 8000;

app.use(express.static('./assets'));
app.use(expressLayouts);
app.use('/',require('./routes'));

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,((err)=>{
    if(err){
        console.log(`Error while runnning the server: ${err}`);
    }
    console.log(`The server is running successfully on port: ${port}`);
}));
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

const adminRoutes=require('./routes/admin');//my own file imported
const shopRoutes=require('./routes/shop');//my own file imported
const contactRoutes=require('./routes/contactus');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use('/admin',contactRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);
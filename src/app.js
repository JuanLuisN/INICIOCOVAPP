const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//importing routes
const covappRoutes = require('./routes/covapp');
const connection = require('mysql/lib/Connection');
//settings
app.set('port',process.env.PORT || 2000);
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'b5pofpw3ei4wd0sy1eea-mysql.services.clever-cloud.com',
    user: 'u5hoog4tmttkkj9h',
    password: '9bOEXNcsoAueiw8JA0xL',
    port: 3306,
    database: 'b5pofpw3ei4wd0sy1eea'
},'single'));
app.use(express.urlencoded({
    extended:false
}));
//routas = peticiones 
app.use('/', covappRoutes);

   app.get('/hospitales', (req, res) => {
    res.render('hospitales');
   });
   app.get('/consejos', (req, res) => {
    res.render('consejos');
   });
   app.get('/vacunas', (req, res) => {
    res.render('vacunas');
   });

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 2000' );
});
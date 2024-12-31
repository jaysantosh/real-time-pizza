require('dotenv').config()//this is done for actually COOKIE_SECRET
let express = require('express')
let path = require('path')
let ejs = require('ejs')
let expressLayout = require('express-ejs-layouts');
let app = express()
const PORT = process.env.PORT||9000;
const mongoose = require('mongoose')
const session = require('express-session')//session related package
const flash = require('express-flash')//this is also for sessions and cookies
const MongoDbStore = require('connect-mongo')//This package used to store session in database
//Database Connection

const url = "mongodb://localhost/pizza";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database Connected")
})
//Session Store
let mongoStore = MongoDbStore.create({
    client: connection.getClient(),
    collectionName: 'sessions'
})


//Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,//for cookie 
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }//24 hours


}))
app.use(flash())
//assets
app.use(express.static('public'))
app.use(express.json());

//Global middleware
app.use((req, resp, next) => {//this thing has been done to allow every page to use sessions
    resp.locals.session = req.session
    next()//this is necessary to call or else the site won't open and will buffer only
})


app.use(expressLayout);
app.set('views', path.join(__dirname, "resources/views"))//specifying where the views are
app.set('view engine', 'ejs');//specifying that i am using ejs template

require('./routes/web')(app);// This is a function call actually which is there in the ./routes/web.js file in 
//in which we are calling the initRoutes(app) function by the passing the instance of the app .
//so we will get the routing done from this web.js file initRoutes . 



app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})
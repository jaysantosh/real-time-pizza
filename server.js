let express = require('express')
let path = require('path')
let ejs = require('ejs')
let expressLayout = require('express-ejs-layouts');
let app = express()
const PORT = process.env.PORT || 9000;
//assets
app.use(express.static('public'))


app.use(expressLayout);
app.set('views', path.join(__dirname, "resources/views"))
app.set('view engine', 'ejs');

app.get("/", (req, resp) => {
    resp.render('home');
})

app.get("/cart", (req, resp) => {
    resp.render("customers/cart");
})

app.get("/login", (req, resp) => {
    resp.render("auth/login");
})

app.get("/register", (req, resp) => {
    resp.render("auth/register");
})

app.listen(PORT, () => {
    console.log('server is running on Port 9000')
})
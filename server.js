let express = require('express')
let path = require('path')
let ejs = require('ejs')
let expressLayout = require('express-ejs-layouts');
let app = express()
const PORT = process.env.PORT || 9000;
app.get("/", (req, resp) => {
    resp.render('home');
})
app.use(expressLayout);
app.set('views', path.join(__dirname, "resources/views"))
app.set('view engine', 'ejs');
app.listen(PORT, () => {
    console.log('server is running on Port 9000')
})
const homeController = require('../app/http/controllers/homeController')
const authController = require("../app/http/controllers/authController");
const cartController = require('../app/http/controllers/customers/cartController');
function initRoutes(app) {


    app.get("/", homeController().index)


    // app.get("/cart", (req, resp) => {
    //     resp.render("customers/cart");
    // })

    app.get("/cart", cartController().index);
    // app.get("/login", (req, resp) => {
    //     resp.render("auth/login");
    // })
    app.get("/login", authController().login);

    // app.get("/register", (req, resp) => {
    //     resp.render("auth/register");
    // })
    app.get('/register', authController().register);

    app.post('/update-cart', cartController().update);
}
module.exports = initRoutes
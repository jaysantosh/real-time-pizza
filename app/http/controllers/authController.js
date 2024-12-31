function authController() {
    return {
        login(req, res) {
            res.render("auth/login");
        },
        register(req, resp) {
            resp.render("auth/register");
        }
    }
}

module.exports = authController;
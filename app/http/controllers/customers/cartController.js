const { updateMany } = require("../../../models/menu");

function cartController() {
    return {
        index(req, res) {
            res.render('customers/cart')
        },
        update(req, resp) {
            //for the first time creating cart and adding basic object structure
            /*
                let cart={
                    items:{
                    pizzaId:{item:req.body,qty:0}
                    }
                    totalQty:0,
                    totalPrice:0,
                }
            */



            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }

            }
           
            let cart = req.session.cart
            console.log(req.body);
            //check if item does not exist in cart
            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {//creating new item for that pizza
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice += req.body.price;
            }
            else {
                cart.items[req.body._id].qty += 1;
                cart.totalQty += 1;
                cart.totalPrice += req.body.price;
            }

            return resp.json({ totalQty: req.session.cart.totalQty })

        }
    }
}

module.exports = cartController;
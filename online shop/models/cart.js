const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // analyze the cart -- find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id == id);

            if (existingProductIndex !== -1) {
                // Product already exists in the cart
                const existingProduct = cart.products[existingProductIndex];
                existingProduct.qty = existingProduct.qty + 1;
            } else {
                // Product doesn't exist, add a new one
                const newProduct = {
                    id: id,
                    qty: 1
                };
                cart.products.push(newProduct);
            }

            cart.totalPrice = cart.products.reduce((total, product) => {
                return total + product.qty * productPrice;
            }, 0);

            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
};

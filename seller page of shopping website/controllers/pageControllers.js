const Products = require('../models/productPage');

exports.addProducts = async (req, res, next) => {
    
    try {
        //console.log(req.body);
        const {name, price, category } = req.body;
        const newProduct = await Products.create({name, price, category});
        console.log(newProduct);
        res.status(201).json({newProduct});
        
    } catch (error) { 
        console.log(error);
        res.status(500).json({
            error: 'internal server eroor'
        });
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.findAll();

        const productsByCategory = {};

        products.forEach(product => {
            if (!productsByCategory[product.category]) {
                productsByCategory[product.category] = [];
            }
            productsByCategory[product.category].push(product);
        });

        res.status(200).json({ productsByCategory });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
        
    }

};

exports.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        await Products.destroy({ where: { id: productId } });
        res.status(204).end(); // 204 No Content - successful deletion
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
};
const { Product } = require('../models');

const product_index = async (req, res) => {
    try {
        const products = await Product.findAll()

        res.render('products', { title: 'All the Products', products });
    } catch (err) {
        console.log(err);
        res.render('products', { title: 'All the Products'});
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

const product_create_get = async (req, res) => {
    res.render('createProduct', { title: 'Create Products' });
}

const product_create_post = async (req, res) => {
    const { name, price, stock } = req.body;

    try {
        const product = await Product.create({ name, price, stock })

        return res.redirect('/products');
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

module.exports = {
    product_index,
    product_create_get,
    product_create_post
}
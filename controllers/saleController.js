const { Sale } = require('../models');

const sale_index = async (req, res) => {
    try {
        const sales = await Sale.findAll()
        
        res.render('sales', { title: 'All the sales', sales }); 
    } catch (err) {
        console.log(err);
        res.render('sales', { title: 'All the sales'});
        return res.status(500).json({ error: 'Oops, something went wrong' });
    }
}

const sale_details = async (req, res) => {
    const id = req.params.id;

    try {
        const sale = await Sale.findOne({ 
            where: { id }
        })

        res.render('sale', { title: 'Sale', sale })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

const sale_create_get = async (req, res) => {
    res.render('createSale', { title: 'Create Sale' });
}

// const sale_create_post = async (req, res) => {
//     const { name } = req.body;

//     try {
//         const sale = await Sale.create({ name })
        
//         return res.redirect('/sales');
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ error: 'Oops, something went wrong' })
//     }
// }

// const sale_delete = async (req, res) => {
//     const id = req.params.id;

//     try {
//         Sale.destroy({ 
//             where: { id }
//         })

//         return res.status(200).json({ message: 'Sale deleted' });
//     } catch (err) {
//         return res.status(500).json({ error: 'Oops, something went wrong' })
//     }
// }

// const sale_put = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const sale_model = {
//             name: req.body.name
//         }

//         try {
//             const sale = await Sale.update(sale_model, { 
//                 where: { id } 
//             })
//             return res.status(200).json({sale});
//         } catch (err) {

//         }
//     } catch (err) {
//         return res.status(500).json(error);
//     }
// }

module.exports = {
    sale_index,
    sale_details,
    sale_create_get,
    // sale_create_post,
    // sale_delete,
    // sale_put
}
const { Client } = require('../models');

const client_index = async (req, res) => {
    try {
        const clients = await Client.findAll()
        
        res.render('clients', { title: 'All the clients', clients }); 
    } catch (err) {
        console.log(err);
        res.render('clients', { title: 'All the clients'});
        return res.status(500).json({ error: 'Oops, something went wrong' });
    }
}

const client_details = async (req, res) => {
    const id = req.params.id;

    try {
        const ec_Client = await Client.findOne({ 
            where: { id }
        })

        res.render('ec_client', { title: 'Client', ec_Client })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

const client_create_get = async (req, res) => {
    res.render('createClient', { title: 'Create Client' });
}

const client_create_post = async (req, res) => {
    const { name } = req.body;

    try {
        const client = await Client.create({ name })
        
        return res.redirect('/clients');
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

const client_delete = async (req, res) => {
    const id = req.params.id;

    try {
        Client.destroy({ 
            where: { id }
        })

        return res.status(200).json({ message: 'Client deleted' });
    } catch (err) {
        return res.status(500).json({ error: 'Oops, something went wrong' })
    }
}

const client_put = async (req, res) => {
    const id = req.params.id;

    try {
        const client_model = {
            name: req.body.name
        }

        try {
            const client = await Client.update(client_model, { 
                where: { id } 
            })
            return res.status(200).json({client});
        } catch (err) {

        }
    } catch (err) {
        return res.status(500).json(error);
    }
}

module.exports = {
    client_index,
    client_details,
    client_create_get,
    client_create_post,
    client_delete,
    client_put
}
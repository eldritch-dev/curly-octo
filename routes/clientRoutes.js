const express = require('express');
const clientController = require('../controllers/clientController');
const router = express.Router();

router.get('/', clientController.client_index);
router.get('/create', clientController.client_create_get);
router.post('/create', clientController.client_create_post);
router.get('/:id', clientController.client_details);
router.delete('/:id', clientController.client_delete);
router.put('/:id', clientController.client_put);

module.exports = router;
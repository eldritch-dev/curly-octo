const express = require('express');
const saleController = require('../controllers/saleController');
const router = express.Router();

router.get('/', saleController.sale_index);
router.get('/create', saleController.sale_create_get);
// router.post('/create', saleController.sale_create_post);
router.get('/:id', saleController.sale_details);
// router.delete('/:id', saleController.sale_delete);
// router.put('/:id', saleController.sale_put);

module.exports = router;
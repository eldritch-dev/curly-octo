const express = require('express');

const app = express();
const PORT = 3066;

const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');

// Server
app.listen(PORT, async() => {
    console.log('Server running on port', PORT);
});

// View Engine
app.set('view engine', 'ejs');

// Middlewares & Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log('new request made: ');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
})

// Routes
app.use('/clients', clientRoutes);
app.use('/products', productRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page not found' });
})


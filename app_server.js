// --- Setting up the server and configuration
const express = require('express');
const app = express();
const port = 2222;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// -- App starts from here
app.get('/', (req, res) => {
    let items = [
        { name : "apple", price : 4.99 },
        { name:"banana", price : 5.99 },
        { name : "jackfruit", price: 10.99 }
    ];

    res.render('index.ejs', {items, pageTitle: "Home"});
});

app.get('/fruitcart', (req, res) => {
    const { totalPrice } = req.query;
    console.log(`total fruit purchased: £ ${totalPrice}`)
    res.render('finishedpay', {totalPrice, pageTitle: "TotalPriceToPay"});
});

app.get('/contact', (req,res) => {
    res.render('contact', { pageTitle: "Contact" });
});

app.listen(port, () => {
    console.log(`Server has started listening to port localhost:${port}`);
});

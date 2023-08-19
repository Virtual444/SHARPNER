const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const formController = require('./controllers/formController');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.get('/contactus', formController.getContactus);

app.get('/success', formController.postSuccess);
// Route for the success page
app.post('/success', (req, res) => {
    // Handle form submission here (store data, etc.)
    // For this example, we're just redirecting to the success page
    res.redirect('/success');
});

// Route for handling "Page not found" errors
app.use(errorController.get404);

app.listen(3000);

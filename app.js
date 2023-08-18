const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Serve static files from the 'views' directory

// Route for the contact form
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
});

app.get('/success', (req,res) =>{
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});
// Route for the success page
app.post('/success', (req, res) => {
    // Handle form submission here (store data, etc.)
    // For this example, we're just redirecting to the success page
    res.redirect('/success');
});

// Route for handling "Page not found" errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

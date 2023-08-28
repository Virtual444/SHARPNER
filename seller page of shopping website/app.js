const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const  sequelize = require('./util/database');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
const pageRoutes = require('./routes/pageRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', pageRoutes);


sequelize.sync()
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.log(' sync error:', error);
});  

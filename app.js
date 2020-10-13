const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views','views');
app.use('/admin', adminData.router);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.render('404',{pageTitle: 'error'});
});

app.listen(3000);

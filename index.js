const express = require('express');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('./public'));

app.set('view engine','ejs');

app.use('/',mainRoutes);

app.listen(3001, () => console.log("Nice server 3001"));
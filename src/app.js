const express = require('express');
const app = express();
const path = require('path');

//nos creara un objeto vacio y el jsones para que entienda angular o react
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/email'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log('server on port 3000');
});
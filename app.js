const express = require ('express');
const bodyParse = require('body-parser');
const pokemonRoutes = require('.routes/pokemonRoutes');
const { Console } = require('console');

const app = express();
app.set('view engine' , 'ejs');
app.set('views' , './views');
app.use(bodyParser.orlencoded({extends: true}));
app.use.use(express.static('public'));

app.use('/', pokemonRoutes);

const PORT = process.emitWarning.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
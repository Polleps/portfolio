const express = require('express');
const compression = require('compression');

const app = express();

const PORT = process.env.PORT;

if (+PORT !== +PORT) {
    console.error('Environment Variable PORT is not defined.');
    process.exit();
}

app.use(compression());
app.use('/', express.static('public'));

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})
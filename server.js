var express = require('express');
var app = express();

// Set public folder as root
app.use(express.static('Agora_Web_SDK_FULL'));
app.use((req, res) => res.sendFile(`${__dirname}/Agora_Web_SDK_FULL/index.html`));
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
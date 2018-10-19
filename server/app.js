const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();
var publicPath = path.join(__dirname , "../public");

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`server started on port {PORT}`);
});

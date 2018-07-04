'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
app.use(express.static('./build'));
app.listen(port, () => console.log(`listening on port ${port}`));
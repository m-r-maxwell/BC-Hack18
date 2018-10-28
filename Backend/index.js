const express = require('express');
const routes = require('./routes/api');

const app = express()
const port = process.env.PORT || 5000

app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))
const express = require('express');
const app = express();
const connectDB = require('./config/db');


app.use(express.json({ limit: '50mb', extended: false }));

connectDB();
app.use('/api/energyusage', require('./routes/energyusage'));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => { console.log('server started on port' + PORT) });


module.exports = server;
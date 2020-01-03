require('dotenv').config();
const express = require("express");
const app = express();
const massive = require("massive");
const con = require("./controller");
const { SERVER_PORT, DATABASE_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log("Database connected");
});

app.get('/api/houses', con.getHouses);
app.post('/api/house', con.addHouse);
app.delete('/api/house/:id', con.deleteHouse);
app.put('/api/house/:id', con.editHouse);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
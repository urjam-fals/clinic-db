const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/doctors', (req, res) => {
    db.all('SELECT * FROM DOCTOR', [], (err, rows) => {
        if(err) return res.json(err);
        res.json(rows);
    });
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});

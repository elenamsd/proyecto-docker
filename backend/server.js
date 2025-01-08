const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 8081;

const pool = new Pool({
    user: 'admin',
    host: 'postgres-container',
    database: 'test',
    password: 'admin',
    port: 5432,
});

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
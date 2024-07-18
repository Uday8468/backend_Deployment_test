let express = require("express");
const cors = require('cors');
let app = express();
module.exports = app;

app.use(cors());




app.use(express.json());
let sqlite = require("sqlite");
let sqlite3 = require("sqlite3");

let { open } = sqlite;
let path = require("path");
let dbpath = path.join(__dirname, "database.db");

let db = null;
let intializeDBAndServer = async () => {
  db = await open({
    filename: dbpath,
    driver: sqlite3.Database,
  });
  app.listen(4000, () => {
    console.log("Server Started at http://localhost:4000/");
  });
};
intializeDBAndServer();


app.get('/', async (req, res) => {
    try {
        res.send('Welcome, this is Roxiler company assignment backend domain.Please access any path to get the data');
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/addnotes', async (req, res) => {
    try {
        res.send('Notes added');
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/getarchivelist', async (req, res) => {
    try {
        res.send('Archive List rendered');
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/getdeletedlist', async (req, res) => {
    try {
        res.send('Delete List rendered');
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const initOptions={}
const pgp = require('pg-promise')(initOptions)
require('dotenv').config()

// Preparing the connection details:
const cn = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:'localhost',
    port:5432,
    database:'metasapp'
}

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
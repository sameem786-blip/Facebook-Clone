import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "social"
});

db.connect((err) => {
    if (err) throw err;
    console.log("connected to db");
})

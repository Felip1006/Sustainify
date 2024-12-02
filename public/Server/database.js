import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'MXTM@RF3L1P.1023',
    database: 'login_interface'
}).promise()

const result = await pool.query("SELECT * FROM users")
console.log(result)
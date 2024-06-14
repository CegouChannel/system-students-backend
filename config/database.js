import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
})

// Проверка подключения
conn.connect(err => {
    if (err) {
        console.error('Ошибка подключения к базе данных: ', err);
        return;
    }
    console.log('Подключение к базе данных успешно установлено');
});
export default conn
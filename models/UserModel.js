import conn from '../config/database.js'
import {generate} from "password-hash";

export const insertUser = (data, result) => {
    const hashedPass = generate(data.password)
    conn.query("INSERT INTO users (id, fio, email, password, role) VALUES (NULL, ?, ?, ?, 1)", [data.fio, data.email, hashedPass, data.role], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const getUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                reject(err);
            } else if (results.length === 0) {
                resolve(null);
            } else {
                resolve(results[0]);
            }
        });
    });
};


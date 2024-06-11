import conn from '../config/database.js'

export const getStudents = (result) => {
    conn.query("SELECT * FROM students ", (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const getStudentsById = (id, result) => {
    conn.query("SELECT * FROM students WHERE id = ?", [id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

export const insertStudent = (data, result) => {
    conn.query("INSERT INTO students (id, fio, address, `group`, phone) VALUES (NULL, ?, ?, ?, ?)", [data.fio, data.address, data.group, data.phone], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const updateStudentById = (data, id, result) => {
    conn.query("UPDATE students SET fio = ?, address = ?, `group` = ?, phone = ? WHERE id = ?", [data.fio, data.address, data.group, data.phone, id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const deleteStudentById = (id, result) => {
    conn.query("DELETE FROM students WHERE id =?", [id], (err, results) => {
        if(err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}


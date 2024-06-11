import conn from '../config/database.js'

export const getJournal = (result) => {
    conn.query("SELECT * FROM journal ", (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const getJournalById = (id, result) => {
    conn.query("SELECT * FROM journal WHERE id = ?", [id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

export const insertJournal = (data, result) => {
    conn.query("INSERT INTO journal (id, id_student, id_lesson, status, estimate) VALUES (NULL, ?, ?, ?, ?)", [data.studentId, data.lessonId, data.status, data.estimate], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            console.log(results)
            result(null, results)
        }
    })
}

export const updateJournalById = (data, id, result) => {
    console.log(data)
    conn.query("UPDATE journal SET status = ?, estimate = ?  WHERE id = ?", [data.status, data.estimate, id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const deleteJournalById = (id, result) => {
    conn.query("DELETE FROM journal WHERE id =?", [id], (err, results) => {
        if(err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}


import conn from '../config/database.js'

export const getPlansTraining = (result) => {
    conn.query("SELECT * FROM plans_training ", (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const getPlanTrainingById = (id, result) => {
    conn.query("SELECT * FROM plans_training WHERE id = ?", [id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

export const insertPlanTraining = (data, result) => {
    conn.query("INSERT INTO plans_training (id, name) VALUES (NULL, ?)", [data.name], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            console.log(results)
            result(null, results)
        }
    })
}

export const updatePlanTrainingById = (data, id, result) => {
    conn.query("UPDATE plans_training SET name = ? WHERE id = ?", [data.name, data.id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const deletePlanTrainingById = (id, result) => {
    conn.query("DELETE FROM plans_training WHERE id =?", [id], (err, results) => {
        if(err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}


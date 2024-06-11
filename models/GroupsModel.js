import conn from '../config/database.js'

export const getGroups = (result) => {
    conn.query("SELECT * FROM groups ", (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const getGroupById = (id, result) => {
    conn.query("SELECT * FROM groups WHERE id = ?", [id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}

export const insertGroup = (data, result) => {
    conn.query("INSERT INTO groups (id, name, id_plan_training) VALUES (NULL, ?, ?)", [data.name, data.planTraining], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            console.log(results)
            result(null, results)
        }
    })
}

export const updateGroupById = (data, id, result) => {
    conn.query("UPDATE `groups` SET name = ?, id_plan_training = ?  WHERE id = ?", [data.name, data.planTraining, id], (err, results) => {
        if (err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const deleteGroupById = (id, result) => {
    conn.query("DELETE FROM groups WHERE id =?", [id], (err, results) => {
        if(err) {
            result(err, null)
        } else {
            result(null, results)
        }
    })
}


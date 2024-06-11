import {
    getStudents,
    getStudentsById,
    deleteStudentById,
    insertStudent,
    updateStudentById
} from "../models/StudentModel.js";

export const showStudents = (req, res) => {
    getStudents((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showStudentById = (req, res) => {
    const id = req.params.id
    getStudentsById(id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createStudent = (req, res) => {
    const data = req.body
    insertStudent(data, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updateStudent = (req, res) => {
    const body = req.body
    const id = req.params.id
    updateStudentById(body, id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deleteStudent = (req, res) => {
    const id = req.params.id
    deleteStudentById(id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
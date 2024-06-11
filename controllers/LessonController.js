import {
    getLessonById, updateLessonById, deleteLessonById, insertLesson, getLessons
} from "../models/LessonModel.js";

export const showLessons = (req, res) => {
    getLessons((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showLessonById = (req, res) => {
    const id = req.params.id
    getLessonById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createLesson = (req, res) => {
    const data = req.body
    insertLesson(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updateLesson = (req, res) => {
    const body = req.body
    const id = req.params.id
    updateLessonById(body, id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deleteLesson = (req, res) => {
    const id = req.params.id
    deleteLessonById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
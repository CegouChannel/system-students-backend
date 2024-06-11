import {
    getPlansTraining,
    deletePlanTrainingById,
    updatePlanTrainingById,
    insertPlanTraining,
    getPlanTrainingById
} from "../models/PlanTrainingModel.js";

export const showPlansTraining = (req, res) => {
    getPlansTraining((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showPlanTrainingById = (req, res) => {
    const id = req.params.id
    getPlanTrainingById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createPlanTraining = (req, res) => {
    const data = req.body
    insertPlanTraining(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updatePlanTraining = (req, res) => {
    const body = req.body
    const id = req.params.id
    updatePlanTrainingById(body, id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deletePlanTraining = (req, res) => {
    const id = req.params.id
    deletePlanTrainingById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
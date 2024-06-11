import {
    getJournal,
    deleteJournalById,
    insertJournal,
    updateJournalById,
    getJournalById
} from "../models/JournalModel.js";

export const showJournal = (req, res) => {
    getJournal((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showJournalById = (req, res) => {
    const id = req.params.id
    getJournalById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createJournal = (req, res) => {
    const data = req.body
    insertJournal(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updateJournal = (req, res) => {
    const body = req.body
    const id = req.params.id
    updateJournalById(body, id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deleteJournal = (req, res) => {
    const id = req.params.id
    deleteJournalById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
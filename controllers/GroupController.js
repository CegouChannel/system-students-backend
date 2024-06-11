import {
    getGroups, updateGroupById, deleteGroupById, insertGroup, getGroupById
} from "../models/GroupsModel.js";

export const showGroups = (req, res) => {
    getGroups((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const showGroupById = (req, res) => {
    const id = req.params.id
    getGroupById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const createGroup= (req, res) => {
    const data = req.body
    insertGroup(data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const updateGroup = (req, res) => {
    const body = req.body
    const id = req.params.id
    updateGroupById(body, id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

export const deleteGroup = (req, res) => {
    const id = req.params.id
    deleteGroupById(id, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
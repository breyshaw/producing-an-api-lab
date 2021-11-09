import { Skater } from '../models/skater.js'

function index(req, res) {
    Skater.find({})
        .then(skaters => {
            res.json(skaters)
        })
}

function show(req, res) {
    Skater.findById(req.params.id)
    .then(skater => {
        res.json(skater)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res) {
    Skater.create(req.body)
    .then(skater => {
        res.json(skater)
    })
}

function update(req, res) {
    Skater.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(skater => {
        res.json(skater)
    })
    .catch(err => {
        res.json(err)
    })
}

function deleteSkater(req, res) {
 Skater.findByIdAndDelete(req.params.id)
 .then(skater => {
     res.json(skater)
 })
}

export {
    index,
    show,
    create,
    update,
    deleteSkater as delete
}
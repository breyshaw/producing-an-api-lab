import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skaterSchema = new Schema ({
    title: String,
    stance: String,
    team: String,
    age: Number,
})

const Skater = mongoose.model('Skater', skaterSchema)

export {
    Skater
}
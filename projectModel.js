const mongoose = require('mongoose')


const schema = mongoose.Schema({
    libelle: { type: String, required: true },
    description: String,
    note: { type: Number, default: 0 },
})

const Project = module.exports = mongoose.model('project', schema)

module.exports.get = (callback, limit) => {
    Project.find(callback).limit(limit);
}
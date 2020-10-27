const Project = require('../models/projectModel')

// Handle index actions
exports.index = (req, res) => {
    Project.get((err, projects) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "OK",
            data: projects
        })
    })
}

// Handle create
exports.new = (req, res) => {
    const project = new Project();
    const { libelle, description } = req.body
    
    project.libelle = libelle ? libelle : project.libelle
    project.description = description ? description : project.description

    // Save the project
    project.save((err) => {
        if (err) {
            res.json(err)
            return
        }
        res.json({
            message: 'New project created !',
            data: project
        })
        return
    })
}

// Handle detail
exports.view = (req, res) => {
    const id = req.params.id
    Project.findById(id, (err, project) => {
        if (err) {
            res.json(err)
        }
        res.json({
            message: '1 project found !',
            data: project
        })
    })
}

// Handle update
exports.update = (req, res) => {
    const id = req.params.id
    const { libelle, description, note } = req.body

    Project.findById(id, (err, project) => {
        if(err) {
            res.send(err)
        }

        project.libelle = libelle ? libelle : project.libelle
        project.description = description ? description : project.description
        project.note = note ? note : project.note

        project.save((err) => {
            if (err) {
                res.json(err)
            }
            res.json({
                message: 'Project updated !',
                data: project
            })
        })
    })
}

// Handle delete
exports.delete = (req, res) => {
    const id = req.params.id

    Project.deleteOne({_id: id}, (err, project) => {
        if (err) {
            res.json(err)
        }
        res.json({
            message: "Success",
            data: project
        })
    })
}


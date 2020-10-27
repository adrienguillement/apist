const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: 'OK',
        message: 'All fine!'
    })
})

const projectController = require('./controllers/projectControllers')

router.route('/projects')
    .get(projectController.index)
    .post(projectController.new)

router.route('/projects/:id')
    .get(projectController.view)
    .put(projectController.update)
    .delete(projectController.delete)

module.exports = router
const Projects = require('./model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.postProject(req.body)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(next)
})
module.exports = router
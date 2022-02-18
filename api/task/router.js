const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.postTask(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

module.exports = router
const Resources = require('./model')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.postResource(req.body)
        .then(posted => {
            res.status(201).json(posted)
        })
        .catch(next)
})

module.exports = router

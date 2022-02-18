const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

const postResource = async (resource) => {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources')
            .where('resource_id', resource_id)
            .first()
        })
    
}

module.exports = {
    getResources,
    postResource
}
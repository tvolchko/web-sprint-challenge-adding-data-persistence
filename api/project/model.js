const db = require('../../data/dbConfig')

const getProjects = async () => {
    const query = await db('projects')
    return query.map(proj => {
        if(proj.project_completed === 0){
            return {
                ...proj,
                project_completed: false
            }
        } else {
            return {
                ...proj,
                project_completed: true
            }
        }
    })
}

const postProject = async (proj) => {
    const post = await db('projects').insert(proj)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id)
        .first()
    })
    
    if(post.project_completed === 0){
        return {
            ...proj,
            project_completed: false
        }
    } else {
        return {
            ...proj,
            project_completed: true
        }
    }
    
}

module.exports = { 
    getProjects,
    postProject
}
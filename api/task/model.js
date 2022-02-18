const db = require('../../data/dbConfig')

const getTasks = async () => {
    const query = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
    return query.map(task => {
        if(task.task_completed === 0){
            return {
                ...task,
                task_completed: false
            }
        } else {
            return {
                ...task,
                task_completed: true
            }
        }
    })
}

const postTask = async (task) => {
    const post = await db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks')
            .where('task_id', task_id)
            .first()
        })
    
    if(post.task_completed === 0){
        return {
            ...post,
            task_completed: false
        }
    } else {
        return {
            ...post,
            task_completed: true
        }
    }
    
}

module.exports = {
    getTasks,
    postTask
}
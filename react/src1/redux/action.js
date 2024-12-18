export function addUser(user){
    return {type:'ADD_USER' ,payLoad:user}
}
export function deleteUser(user){
    return {type:'DELETE USER' ,payLoad:user}
}
export function updateName(user){
    return {type:'UPDATE NAME' ,payLoad:user}
}
export function updateCount(cnt){
    return {type:'UPDATE COUNT' ,payLoad:cnt}
}
export function addTask(task){
    return{type:'ADD TASK',payLoad:task}
}
export function addType(task){
    return{type:'ADD TYPE',payLoad:task}
}
export function removeTask(id)
{
    return{type:'REMOVE_TASK',payLoad:id}
}
export function updateTask(id)
{
    return{type:'UPDATE_TASK',payLoad:id}
}
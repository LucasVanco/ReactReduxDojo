let nextUserId = 0
export const addUser = (userName) => ({
    type: 'ADD_USER',
    name: userName,
    id: nextUserId++
})

export const deleteUser = (userId) => ({
    type: 'DELETE_USER', 
    id: userId
})
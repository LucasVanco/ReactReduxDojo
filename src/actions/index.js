let nextUserId = 0

export const addUser = (user) => ({
  type: 'ADD_USER',
  name: user,
  id: nextUserId++
})

export const deleteUser = (id) => ({
  type: 'REMOVE_USER',
  id: id
})

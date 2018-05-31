let nextUserId = 0
export const addUser = (name) => ({
  type: 'ADD_USER',
  id: nextUserId++,
  name: name
})

export const deleteUser = (id) => ({
  type: 'DEL_USER',
  id: id
})
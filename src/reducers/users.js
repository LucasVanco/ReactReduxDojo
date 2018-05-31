const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return  state.concat({
        name: action.name,
        id: action.id
      })
    case 'DELETE_USER':
      return state.filter((user) => {
        return (user.id === action.id ? false : true)
      })
    default: 
      return state
  }
}

export default users

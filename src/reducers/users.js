const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, {
        name: action.name,
        id: action.id
      }]
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.id)
    default:
      return state
  }
}

export default users

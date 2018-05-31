import { connect } from 'react-redux'
import { deleteUser } from '../actions'
import UsersList from '../components/UsersList'

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  deleteUser: id => dispatch(deleteUser(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)

import { connect } from 'react-redux'
import UsersList from '../components/UsersList'
import { deleteUser } from '../actions/index';

const mapStateToProps = state => ({
    users: state.users 
})

const mapDispatchToProps = dispatch => ({
    deleteUser: (id) => dispatch(deleteUser(id)) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList)

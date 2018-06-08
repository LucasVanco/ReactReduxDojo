import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/index'


class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  getCredentials(e){
    this.setState({
      name: e.target.value
    })
  }

  handleClick(){
    this.props.dispatch(addUser(this.state.name))
  }

  render() {
    return (
        <div>
          <input type='text' placeholder="Nom" onChange={this.getCredentials.bind(this)} value={this.state.name} />
          <button type='submit' onClick={this.handleClick.bind(this)}></button>
        </div>
    );
  }


}

export default connect()(AddUser)

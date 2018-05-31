import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { addUser } from '../actions'
import { connect } from 'react-redux'

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onAddClick = this.onAddClick.bind(this)
  }

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  onAddClick (event) {
    event.preventDefault()
    this.props.dispatch(addUser(this.state.name))
    this.setState({
      name: ''
    })
  }

  render() {
    return (
        <div>
          <Form inline>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Name</ControlLabel>{' '}
              <FormControl
                  type="text"
                  placeholder="Jane Doe"
                  value={this.state.name}
                  onChange={this.onNameChange}
              />
            </FormGroup>{' '}
            <Button
                bsStyle="primary"
                onClick={this.onAddClick}
            >Ajouter</Button>
          </Form>
        </div>
    );
  }
}

export default connect()(AddUser)

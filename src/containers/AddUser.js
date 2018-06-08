import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { addUser } from '../actions/index'

class AddUser extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.dispatch(addUser(this.state.name))
  }

  handleChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  render () {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId='formInlineName'>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' onChange={this.handleChange.bind(this)} />
          </FormGroup>
          <Button type='submit'>send</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(AddUser)

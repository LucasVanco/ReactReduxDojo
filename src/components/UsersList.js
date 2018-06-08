import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Button, Glyphicon } from 'react-bootstrap'

class UsersList extends Component {

  onDeleteClick (user, event) {
  }

  render() {
    return (
        <div className='ulist'>
          <ListGroup>
            {
              this.props.users.map(user =>
                  <ListGroupItem key={user.id}>
                    {user.name}{' '}
                    <Button bsStyle='danger' onClick={this.onDeleteClick.bind(this, user)}>
                      <Glyphicon glyph="minus" />
                    </Button>
                  </ListGroupItem>
              )
            }
          </ListGroup>
        </div>
    );
  }
}

export default UsersList;

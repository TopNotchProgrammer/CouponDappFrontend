import React from 'react';
import { Dropdown } from 'react-bootstrap'
import { Person } from 'react-bootstrap-icons';

function User(props) {
    return (
        <Dropdown className="float-right ml-2">
            <Dropdown.Toggle variant="primary">
                <Person />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#user">{props.address}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default User

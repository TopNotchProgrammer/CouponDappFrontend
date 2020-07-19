import React from 'react';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CartCheck } from 'react-bootstrap-icons';
import { Bell } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';

function MenuTop(props) {
  return (
    <Row className={props.className}>
      <Col>
        <Button className="float-right ml-2">
          <Person />
        </Button>
        <Button className="float-right ml-2">
          <Bell />
        </Button>
        <Button className="float-right ml-2">
          <CartCheck />
        </Button>
      </Col>
    </Row>
  )
}

export default MenuTop
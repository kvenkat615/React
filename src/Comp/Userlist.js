import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Userlist() {
  return (
    <div>
      <ListGroup>

       
        <ListGroupItem className="d-flex">
            <strong> Use One</strong>
          <div className="ml-auto">
            <Link  className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
            <Button color="danger">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Userlist;     

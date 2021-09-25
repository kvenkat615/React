import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

function Adduser() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter Name " />
        </FormGroup>
        <Button type="submit"> Submit</Button>
        <Link to="/" className="btn btn-danger ml-2 ">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default Adduser;

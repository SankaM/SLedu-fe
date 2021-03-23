import React from "react";
import Button from "@material-ui/core/Button";
import Aux from "../components/Wrap";

const Admin = (props) => {
  
  return (
    <Aux>
      <div className="row">
        <div className="col-3">
          <Button variant="contained" color="secondary">
            Create Artical
          </Button>
        </div>
        <div className="col-9"></div>
      </div>
    </Aux>
  );
};

export default Admin;

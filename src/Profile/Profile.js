import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const Profile = ({
  fullName = "default full name",
  bio = "default bio",
  profession,
  alertByName,
  children,
}) => {
  return (
    <div>
      <Card style={{backgroundColor:"#f1d7e7"}}>
        {children}
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>
            <span style={{ fontStyle: "italic" }}>{profession}</span>
            <br/>
            {bio}
          </Card.Text>
          
          <Button onClick={() => alertByName("NAME IS : "+ fullName )}>ClickMe</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
Profile.defaultProps = {
  profession: "default profession",
};
Profile.prototype = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  alertByName: PropTypes.func,
};
export default Profile;

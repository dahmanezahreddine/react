import React from "react";
import PropTypes from "prop-types";

function ProfileComponent(props) {
  return (
    <div style={props.myStyle}>
      <div>{props.Name}</div>
      <div>{props.LastName}</div>
      <div>{props.Profession}</div>
      {props.children}
      <div>{props.alertcheckpoint()}</div>
    </div>
  );
}

ProfileComponent.defaultProps = {
  Name: "default text",
  LastName: "default text",
  Profession: "default text",
};

ProfileComponent.propTypes = {
  Name: PropTypes.string,
  LastName: PropTypes.string,
  Profession: PropTypes.string,
};

export default ProfileComponent;

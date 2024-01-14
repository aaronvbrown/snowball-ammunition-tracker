import React from "react";
import PropTypes from "prop-types";

function Toboggan(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTobogganClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.origin} - {props.type}</p>
        <p><b>{props.inventory}</b></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Toboggan.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenTobogganClicked: PropTypes.func
};

export default Toboggan;
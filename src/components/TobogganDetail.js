import React from "react";
import PropTypes from "prop-types";

function TobogganDetail(props) {
  const { toboggan, onClickingDelete, onClickingThrowSnowball } = props;

  function handleThrowingSnowball() {
    onClickingThrowSnowball(toboggan);
  }

  return (
    <React.Fragment>
      <h1>Toboggan Detail</h1>
      <h3>Snowballs Remaining: {toboggan.inventory}  <button onClick={handleThrowingSnowball}>Throw Snowball</button></h3>
      <p><em>Snowball Type: {toboggan.type}</em></p>
      <h3>Name: {toboggan.name}</h3>
      <h3>Origin: {toboggan.origin}</h3>
      <button onClick={ props.onClickingEdit }>Update Toboggan</button>
      <button onClick={()=> onClickingDelete(toboggan.id) }>Return Empty Toboggan</button>
      <hr/>
    </React.Fragment>
  );
}

TobogganDetail.propTypes = {
  toboggan: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TobogganDetail;
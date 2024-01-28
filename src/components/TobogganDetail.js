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
      <h3>{toboggan.name} - {toboggan.origin}</h3>
      <p><em>{toboggan.type}</em></p>
      <button onClick={ props.onClickingEdit }>Update Toboggan</button>
      <button onClick={handleThrowingSnowball}>Throw Snowball</button>
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
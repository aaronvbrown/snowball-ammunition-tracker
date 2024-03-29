import React  from "react";
import Toboggan from "./Toboggan.js";
import PropTypes from "prop-types";

function TobogganList(props){
  return (
    <>
      <hr />
      {props.tobogganList.map((toboggan) =>
        <Toboggan
          whenTobogganClicked = { props.onTobogganSelection }
          name={toboggan.name}
          origin={toboggan.origin}
          price={toboggan.price}
          type={toboggan.type}
          inventory={toboggan.inventory}
          id={toboggan.id}
          key={toboggan.id}/>
      )}
    </>
  )
}

TobogganList.propTypes = {
  tobogganList: PropTypes.array,
  onTobogganSelection: PropTypes.func
};

export default TobogganList;
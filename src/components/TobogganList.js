import React  from "react";
import Tobaggan from "./Tobaggan";
import PropTypes from "prop-types";

function TobogganList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tobogganList.map((toboggan, index) =>
        <Tobaggan
          whenTobogganClicked = { props.onTobogganSelection }
          name={toboggan.name}
          origin={toboggan.origin}
          price={toboggan.price}
          type={toboggan.type}
          id={toboggan.id}
          key={index}/>
      )}
    </React.Fragment>
  );
}

TobogganList.PropTypes = {
  tobogganList: PropTypes.array,
  onTobogganSelection: PropTypes.func
};

export default TobogganList;
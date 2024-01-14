import React  from "react";
import Toboggan from "./Toboggan";
import PropTypes from "prop-types";

function TobogganList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tobogganList.map((toboggan, index) =>
        <Toboggan
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

TobogganList.propTypes = {
  tobogganList: PropTypes.array,
  onTobogganSelection: PropTypes.func
};

export default TobogganList;
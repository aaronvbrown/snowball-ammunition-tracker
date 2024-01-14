import React  from "react";
import Toboggan from "./Toboggan";
import PropTypes from "prop-types";

function TobogganList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tobogganList.map((toboggan) =>
        <Toboggan
          whenTobogganClicked = { props.onTobogganSelection }
          name={toboggan.name}
          origin={toboggan.origin}
          price={toboggan.price}
          type={toboggan.type}
          id={toboggan.id}
          key={toboggan.id}/>
      )}
    </React.Fragment>
  );
}

TobogganList.propTypes = {
  tobogganList: PropTypes.array,
  onTobogganSelection: PropTypes.func
};

export default TobogganList;
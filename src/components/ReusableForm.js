import React from "react";  
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Toboggan Name' />
        <input 
          type='text'
          name='origin'
          placeholder='Toboggan Origin' />
        <input 
          type='text'
          name='price'
          placeholder='Price (Cocoa Units)' />
        <input 
          type='text'
          name='type'
          placeholder='Snowball Type' />
        <input 
          type='number'
          name='inventory'
          placeholder='Snowball Inventory' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
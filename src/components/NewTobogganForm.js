import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'; 
import ReusableForm from './ReusableForm';

function NewTobogganForm(props) {
  function handleNewTobogganFormSubmission(event) {
    event.preventDefault();
    props.onNewTobogganCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      type: event.target.type.value, 
      inventory: event.target.inventory.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTobogganFormSubmission}
        buttonText="Add to Inventory" />
    </React.Fragment>
  );
}

NewTobogganForm.PropTypes = {
  onNewTobogganCreation: PropTypes.func
};

export default NewTobogganForm;

import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTobogganForm (props) {
  const { toboggan } = props;

  function handleEditTobogganFormSubmission(event) {
    event.preventDefault();
    props.onEditToboggan({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      type: event.target.type.value,
      inventory: event.target.inventory.value,
      id: toboggan.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTobogganFormSubmission}
        buttonText="Update Toboggan" />
    </React.Fragment>
  );
}

EditTobogganForm.propTypes = {
  onEditToboggan: PropTypes.func,
  toboggan: PropTypes.object
};

export default EditTobogganForm;


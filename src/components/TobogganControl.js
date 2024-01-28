import React from "react";
import TobogganList from "./TobogganList";
import NewTobogganForm from "./NewTobogganForm";
import TobogganDetail from "./TobogganDetail";
import EditTobogganForm from "./EditTobogganForm";

class TobogganControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTobogganList: [],
      selectedToboggan: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedToboggan != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedToboggan: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleDeletingToboggan = (id) => {
    const newMainTobogganList = this.state.mainTobogganList.filter(toboggan => toboggan.id !== id);
    this.setState({
      mainTobogganList: newMainTobogganList,
      selectedToboggan: null
    });
  }

  handleAddingNewTobogganToList = (newToboggan) => {
    const newMainTobogganList = this.state.mainTobogganList.concat(newToboggan);
    this.setState({
      mainTobogganList: newMainTobogganList,
      formVisibleOnPage: false
    });
  }

  handleEditingTobogganInList = (tobogganToEdit) => {
    const editedMainTobogganList = this.state.mainTobogganList
      .filter(toboggan => toboggan.id !== this.state.selectedToboggan.id)
      .concat(tobogganToEdit);
    this.setState({
      mainTobogganList: editedMainTobogganList,
      editing: false,
      selectedToboggan: null
    });
  }


  handleChangingSelectedToboggan = (id) => {
    const selectedToboggan = this.state.mainTobogganList.filter(toboggan => toboggan.id === id)[0];
    this.setState({ selectedToboggan: selectedToboggan });
  }

  handleThrowingSnowballFromSelectedToboggan = (tobogganToUse) => {
    const updatedInventory = tobogganToUse.inventory -1;

    if (updatedInventory >= 1) {
      const updatedToboggan = {...tobogganToUse, inventory: updatedInventory};

      const editedMainTobogganList = this.state.mainTobogganList
        .filter(toboggan => toboggan.id !== this.state.selectedToboggan.id)
        .concat(updatedToboggan);

      this.setState({
        mainTobogganList: editedMainTobogganList,
        selectedToboggan: updatedToboggan
      });
    }
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTobogganForm toboggan={this.state.selectedToboggan} onEditToboggan={this.handleEditingTobogganInList} />
      buttonText = "Return to Toboggan List";
    } else if (this.state.selectedToboggan != null) {
      currentlyVisibleState = <TobogganDetail
        toboggan={this.state.selectedToboggan}
        onClickingDelete={this.handleDeletingToboggan}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Toboggan List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTobogganForm onNewTobogganCreation={this.handleAddingNewTobogganToList} />
      buttonText = "Return to Toboggan List";
    } else {
      currentlyVisibleState = <TobogganList onTobogganSelection={this.handleChangingSelectedToboggan} tobogganList={this.state.mainTobogganList} />;
      buttonText = "Add Toboggan";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TobogganControl;
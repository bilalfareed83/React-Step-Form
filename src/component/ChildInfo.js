import React, { Component } from 'react';

class ChildInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  //   handleCheckChieldElement = (event) => {
  //     let vaccins = this.props.vaccinationStatus;
  //     vaccins.forEach((vaccin) => {
  //       if (vaccin.value === event.target.value)
  //         vaccin.isChecked = event.target.checked;
  //     });

  //     const item = event.target.value;
  //     const isChecked = event.target.checked;
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       vaccinationStatus: prevState.vaccinationStatus.set({ item, isChecked }),
  //     }));
  //   };

  render() {
    const {
      handler,
      childName,
      childNumber,
      dateOfBirth,
      childAge,
      //   gender
      vaccinationStatus,
    } = this.props;
    return (
      <div>
        <h2> Enter Child Information</h2>
        <label>
          <input
            type="text"
            placeholder="Name of Child (0 to 59 month)"
            name="childName"
            value={childName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Number of Child"
            name="childNumber"
            value={childNumber}
            onChange={handler}
          />
        </label>
        <br />
        <label>
          <input
            type="date"
            placeholder="Child's Date of bith"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handler}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="Child age"
            name="childAge"
            value={childAge}
            onChange={handler}
          />
        </label>
        <p>Male/Female</p>
        <label htmlFor="maleId">
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handler}
            id="maledId"
            defaultValue
          />{' '}
          Male
        </label>
        <label htmlFor="femaleId">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handler}
            id="femaleId"
          />{' '}
          Female
        </label>
        <p>Status of Routine vaccination of (0 to 23 month child).</p>
        {vaccinationStatus.map((val, i) => {
          console.log(val);
          return (
            <label>
              <input
                type="checkbox"
                checked={val.isChecked}
                value={val.value}
                key={i}
                onChange={handler}
                name={val.value}
              />{' '}
              {val.value}{' '}
            </label>
          );
        })}

        <button className="Back" onClick={this.back}>
          Back
        </button>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </div>
    );
  }
}

export default ChildInfo;

import React, { Component } from 'react';

class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      handler,
      codeForHighRiskGroup,
      housenumber,
      castName,
      gardianName,
    } = this.props;
    return (
      <div>
        <h2> Enter Basic Information</h2>
        <label>
          <input
            type="text"
            placeholder="Write House Number"
            name="housenumber"
            value={housenumber}
            onChange={handler}
          />
        </label>

        <label>
          Code for High Risk Group:
          <select
            multiple={true}
            value={[codeForHighRiskGroup]}
            name="codeForHighRiskGroup"
            onChange={handler}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Cast Name"
            name="castName"
            value={castName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Name of Father or Guardian"
            name="gardianName"
            value={gardianName}
            onChange={handler}
          />
        </label>

        <p>Is there any pragnant women?</p>
        <label htmlFor="pragnantNo">
          <input
            type="radio"
            name="isThereAnyPragnantWomen"
            value="no"
            onChange={handler}
            id="pragnantNo"
            // defaultValue
          />{' '}
          No
        </label>
        <label htmlFor="pragnantYes">
          <input
            type="radio"
            name="isThereAnyPragnantWomen"
            value="yes"
            onChange={handler}
            id="pragnantYes"
          />{' '}
          Yes
        </label>

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

export default PersonalInfo;

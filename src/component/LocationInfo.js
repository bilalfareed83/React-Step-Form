import React, { Component } from 'react';

class LocationInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const {
      handler,
      enuminatorName,
      gothName,
      districtName,
      areaName,
      ucName,
      streetName,
      buildingName,
    } = this.props;
    return (
      <div>
        <h2> Enter Area Information</h2>
        <label>
          <input
            type="text"
            placeholder="Enuminator Name"
            name="enuminatorName"
            value={enuminatorName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Village or Goth Name"
            name="gothName"
            value={gothName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="District Name"
            name="districtName"
            value={districtName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="UC Name"
            name="ucName"
            value={ucName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Mohallah or Area Name"
            name="areaName"
            value={areaName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Street Name"
            name="streetName"
            value={streetName}
            onChange={handler}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Building Name"
            name="buildingName"
            value={buildingName}
            onChange={handler}
          />
        </label>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </div>
    );
  }
}

export default LocationInfo;

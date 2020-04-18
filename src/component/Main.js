import React, { Component } from 'react';
import LocationInfo from './LocationInfo';
import PersonalInfo from './PersonalInfo';
import AllInfo from './AllInfo';
import ChildInfo from './ChildInfo';

class Main extends Component {
  state = {
    step: 1,

    // step 1
    enuminatorName: '',
    gothName: '',
    districtName: '',
    ucName: '',
    areaName: '',
    streetName: '',
    buildingName: '',

    //step 2
    housenumber: '',
    codeForHighRiskGroup: [],
    castName: '',
    gardianName: '',
    isThereAnyPragnantWomen: '',

    //step 3
    childName: '',
    childNumber: '',
    dateOfBirth: '',
    childAge: '',
    gender: '',
    vaccinationStatus: [
      { id: 1, value: 'ipv', isChecked: false },
      { id: 2, value: 'peniaIII', isChecked: false },
      { id: 3, value: 'bcg', isChecked: false },
    ],
  };

  showStep = () => {
    const {
      step,
      enuminatorName,
      gothName,
      districtName,
      areaName,
      ucName,
      streetName,
      buildingName,
      codeForHighRiskGroup,
      housenumber,
      castName,
      gardianName,
      isThereAnyPragnantWomen,
      childName,
      childNumber,
      dateOfBirth,
      childAge,
      gender,
      vaccinationStatus,
    } = this.state;
    if (step === 1) {
      return (
        <LocationInfo
          // handler={this.handlerChange}
          handler={this.handlerChangValue}
          nextStep={this.nextStep}
          enuminatorName={enuminatorName}
          gothName={gothName}
          districtName={districtName}
          areaName={areaName}
          ucName={ucName}
          streetName={streetName}
          buildingName={buildingName}
        />
      );
    }

    if (step === 2) {
      return (
        <PersonalInfo
          handler={this.handlerChangValue}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          codeForHighRiskGroup={codeForHighRiskGroup}
          castName={castName}
          housenumber={housenumber}
          gardianName={gardianName}
          isThereAnyPragnantWomen={isThereAnyPragnantWomen}
          childName={childName}
        />
      );
    }
    if (step === 3) {
      return (
        <ChildInfo
          nextStep={this.nextStep}
          handler={this.handlerChangValue}
          previousStep={this.previousStep}
          childName={childName}
          childNumber={childNumber}
          dateOfBirth={dateOfBirth}
          childAge={childAge}
          gender={gender}
          vaccinationStatus={vaccinationStatus}
        />
      );
    }

    if (step === 4) {
      return (
        <AllInfo
          handler={this.handlerChange}
          previousStep={this.previousStep}
          enuminatorName={enuminatorName}
          gothName={gothName}
          housenumber={housenumber}
          codeForHighRiskGroup={codeForHighRiskGroup}
          castName={castName}
        />
      );
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handlerChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  handlerChangValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    const { step } = this.state;

    return (
      <div>
        <h1>Community Health Worker - CHW </h1>
        <h2>Step {step} of 4</h2>
        {this.showStep()}
      </div>
    );
  }
}

export default Main;

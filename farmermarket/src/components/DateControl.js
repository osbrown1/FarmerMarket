import React from "react";
import MarketSchedule from "./MarketSchedule";

class DateControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <MarketSchedule />
    } else {
      currentlyVisibleState = <MarketSchedule />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
export default DateControl;
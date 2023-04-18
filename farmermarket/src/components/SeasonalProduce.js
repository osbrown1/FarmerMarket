import React from "react";
import Produce from "./Produce";

class SeasonalProduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

handleClick = () => {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
}

render() {
  return (
    <React.Fragment>
      <Produce />
    </React.Fragment>
  )
}
}






export default SeasonalProduce
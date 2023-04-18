import React from "react";
import Header from "./Header";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";
import Schedule from "./MarketSchedule";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';



const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Row>
          <Col><MarketSchedule /></Col>
        <Col><BgAnimation /></Col>
          <Col><SeasonalProduce /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}


export default App;

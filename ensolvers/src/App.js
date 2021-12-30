import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { ToDo } from '../src/components/ToDo'
import { SideBar } from '../src/components/SideBar'
import React, { useEffect } from 'react';

function App() {

  return (

    <div className="App">
      <div className="container-fluid">
        <Row>
          <Col xs={4}>
            <SideBar>
            </SideBar>
          </Col>
          <Col xs={8}>
            <ToDo name="Pablo" lastname="Cuevas" yearOld="32">
            </ToDo>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

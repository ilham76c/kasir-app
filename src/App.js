import './App.css';
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Hasil, ListCategories, NavbarComponent } from './components';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
    }
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Product</strong>
                </h4>
                <hr/>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

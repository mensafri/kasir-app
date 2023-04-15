import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h2>Daftar Produk</h2>
              <br />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}

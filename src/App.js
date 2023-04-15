import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";
import { API_URL } from "./utils/constans";
import axios from "axios";
import React, { Component } from "react";
import Menus from "./components/Menus";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {menus} = this.state
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
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

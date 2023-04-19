import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import numberWithCommas from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constans";
import { Link } from "react-router-dom";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };
  render() {
    const totalBayar = this.props.keranjangs.reduce((res, item) => {
      return res + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :{" "}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <Button
              variant="primary"
              size="lg"
              className="mt-4 mb-2 me-2"
              onClick={() => this.submitTotalBayar(totalBayar)}
              as={Link}
              to="/sukses"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

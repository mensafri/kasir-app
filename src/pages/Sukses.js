import axios from "axios";
import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constans";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map((keranjang) => {
          return axios
            .delete(API_URL + "keranjangs/" + keranjang.id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src={require("./sukses.png")} width="500px" />
        <h2>Sukses Pesan</h2>
        <p>Terima kasih sudah memesan!</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <div className="ba b--light-gray tr ph3">
        <h3>Cart</h3>
      </div>
    );
  }
}

export default connect()(Cart);

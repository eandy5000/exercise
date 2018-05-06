import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction, clearCartAction } from "../../actions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart.length > 0) {
      const calcTotal = nextProps.cart.reduce((acc, item) => {
        return acc + item.qty * item.price;
      }, 0);
      this.setState({ total: calcTotal });
    }
  }

  clearStateAndContainer() {
    this.props.clearCartAction();
    this.setState({ total: 0 });
  }

  render() {
    console.log("cart ", this.props.cart);
    return (
      <div className="ba b--light-gray tr ph3">
        <h3>Cart</h3>
        <h5>total: ${this.state.total}</h5>
        <button onClick={() => this.clearStateAndContainer()}>clear</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCartAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../actions";

class Counter extends React.Component {
  render() {
    const { count, addCount } = this.props;
    return (
      <div>
        <h1>counter: {count}</h1>
        <button onClick={addCount}>adder</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count.count
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

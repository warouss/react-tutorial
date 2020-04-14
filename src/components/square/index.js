import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Square extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

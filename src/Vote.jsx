import React, { Component } from "react";

import propTypes from "prop-types";
export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supNum: 10,
      oppNum: 5,
    };
  }
  // 属性规则校验
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: propTypes.string.isRequired,
    num: propTypes.number,
  };
  render() {
    let { title } = this.props;
    let {supNum,oppNum}=this.state
    return (
      <div>
        <h1>{title}</h1>
        总数:{supNum + oppNum}
        <br />
        支持:{supNum}
        <br />
        反对:{oppNum}
        <button
          onClick={(event) => {
            this.setState({
                supNum:supNum+1
            })
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
             this.setState({
                oppNum:oppNum+1
             })
          }}
        >
          反对
        </button>
      </div>
    );
  }
}

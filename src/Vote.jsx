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
    console.log("666", this.state);
    let { supNum, oppNum } = this.state;
    return (
      <>
        <h1>
          支持:{oppNum}
          反对:{supNum}
        </h1>
        <button
          onClick={() => {
            this.setState({
              supNum: supNum + 1,
            });
          }}
        >
          支持
        </button>

        <button
          onClick={() => {
            this.setState({
              oppNum: oppNum - 1,
            });
          }}
        >
          反对
        </button>
      </>
    );
  }
  /* render() {
    console.log("渲染");
    let { title } = this.props;
    let { supNum, oppNum } = this.state;
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
              supNum: supNum + 1,
            });
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            this.setState({
              oppNum: oppNum + 1,
            });
          }}
        >
          反对
        </button>
      </div>
    );
  } */
  /* componentWillMount(){
   console.log('第一次渲染之前')
  }
  componentDidMount() {
    console.log("第一次渲染完毕");
  } */
  /*  shouldComponentUpdate(nextProps, nextState) {
    // nextState: 存储要修改的最新状态
    // this.state:存储的还是修改前的状态【此时状态还没有改变】
    // 返回true  允许更新，会继续执行下一个操作
    // 返回false 不允许更新，接下来啥都不处理
    console.log(this.state, nextState);
    return true;
  }
  // componentWillUpdate() {}
  componentDidUpdate() {
    console.log("第一次渲染完毕");
  } */
}

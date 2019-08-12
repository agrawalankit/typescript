import React from 'react';
import "antd/dist/antd.css";
import Count from '../Count';
import { Row, Col, Card, Layout, Spin } from "antd";

const { Header, Footer, Sider, Content } = Layout;

interface Props {}

interface State {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <Layout>
        <Header>
          <h2 style={{ color: "#fff" }}>MongoDB Dashboard</h2>
        </Header>
        <Content style={{ padding: "25px", margin: "25px" }}>
          <div>
            <h1>Counter</h1>
            <Count count={this.state.count} />
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
        </Content>
      </Layout>
    );
  }
}
import React, { Component } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default class MenuHome extends Component {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  componentDidMount() { }

  render() {
    console.log(this.props, "props123");
    const { tabPosition } = this.state;
    return (
      <div className="container">
        <Tabs tabPosition={tabPosition}>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                alt=""
                className="rounded-full"
                width="50"
              />
            }
            key="1"
          >
            Content of Tab 1
          </TabPane>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                alt=""
                className="rounded-full"
                width="50"
              />
            }
            key="2"
          >
            Content of Tab 2
          </TabPane>
          <TabPane
            tab={
              <img
                src="https://picsum.photos/200"
                alt=""
                className="rounded-full"
                width="50"
              />
            }
            key="3"
          >
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

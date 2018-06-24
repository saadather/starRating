import React from "react";
import { render } from "react-dom";
import Ratings from "./ratings";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    value: undefined
  };
  handleSelect = value => {
    this.setState(state => ({
      ...state,
      value
    }));
  };
  render() {
    return (
      <div style={styles}>
        <Ratings
          value={this.state.value}
          average={3.2}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

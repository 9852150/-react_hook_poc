import React, { PureComponent } from "react";

class MyPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  handleChange = () => {
    this.setState({ name: "Doe" });
  };

  render() {
    console.log("render again");
    return (
      <>
        <div>{this.state.name} </div>
        <button onClick={this.handleChange}>Click here</button>
      </>
    );
  }
}

export default MyPureComponent;

import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: "Initial Child Data",
    };
    console.log("ChildComponent: constructor called");
  }

  // getDerivedStateFromProps is called before every render (when props change)
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("ChildComponent: getDerivedStateFromProps called");
    if (nextProps.parentData !== nextState.childData) {
      return { childData: nextProps.parentData }; // Update state based on new props
    }
    return null; // No state change
  }

  // shouldComponentUpdate is called before rendering (for performance optimization)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildComponent: shouldComponentUpdate called");
    if (nextProps.parentData === this.props.parentData) {
      return false; // Prevent re-render if the parentData has not changed
    }
    return true; // Re-render if parentData has changed
  }

  // getSnapshotBeforeUpdate is called right before changes are made to the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ChildComponent: getSnapshotBeforeUpdate called");
    return null; // No snapshot data in this case
  }

  // componentDidUpdate is called after the DOM has been updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ChildComponent: componentDidUpdate called");
    if (prevProps.parentData !== this.props.parentData) {
      console.log("Child component received new props!");
    }
  }

  // componentDidMount is called once after the component is mounted
  componentDidMount() {
    console.log("ChildComponent: componentDidMount called");
  }

  // componentWillUnmount is called just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("ChildComponent: componentWillUnmount called");
  }

  render() {
    console.log("ChildComponent: render called");
    return (
      <div>
        <h2>Child Component</h2>
        <p>Received Data from Parent: {this.props.parentData}</p>
        <p>Child Component Data: {this.state.childData}</p>
      </div>
    );
  }
}

export default ChildComponent;

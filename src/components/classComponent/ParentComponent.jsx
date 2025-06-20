import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentData: "Initial Parent Data",
    };
  }

  // Change parent data
  changeParentData = () => {
    this.setState({
      parentData: "Updated Parent Data",
    });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.changeParentData}>Change Parent Data</button>
        {/* Pass parent data as a prop to ChildComponent */}
        <ChildComponent parentData={this.state.parentData} />
      </div>
    );
  }
}

export default ParentComponent;

// constructor()   //?Called when the component is created.
// getDerivedStateFromProps()   //?Called before each render, both on initial mount and when props change.
// render()   //? Called to render the JSX to the DOM.
// componentDidMount()   //? Called after the component is mounted in the DOM (after the first render).
// shouldComponentUpdate()  //? Called before each re-render. Used to decide whether the component should re-render or not.
// getSnapshotBeforeUpdate()  //? Called right before the DOM is updated (after render but before the changes are applied to the DOM).
// componentDidUpdate()  //? Called after the component's updates have been flushed to the DOM.
// componentWillUnmount()  //? Called just before the component is removed from the DOM.

//! Flow of Execution:
//? Initial Mount (First Render):

// constructor() //?is called first.
// getDerivedStateFromProps() //?is called next, checking whether props need to update the state.
// render() //?is called to generate the JSX.
// componentDidMount() //?is called once the component has been added to the DOM.
// Re-render //?on Prop Update:

// ! When the parent component updates the parentData state (via changeParentData()), the following methods are triggered:
// getDerivedStateFromProps() //?(called before every render, checks if parentData has changed).
// shouldComponentUpdate() //?(determines if the component should update based on prop changes).
//! If the component decides to update, render() is called again.
// getSnapshotBeforeUpdate() //?(called just before the DOM is updated).
// componentDidUpdate() //?(called after the DOM is updated).
// Component Unmount:

// componentWillUnmount() //?When the component is removed (such as when the parent component unmounts), componentWillUnmount() is called.

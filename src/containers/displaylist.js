import React, { Component } from "react";
 
class Displaylist extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var listinputs = this.props.inputs;
    var listItems = listinputs.map(this.createTasks);
 
    return (
      <ul>
          {listItems}
      </ul>
    );
  }
};
 
export default Displaylist;
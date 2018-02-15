import React, { Component } from "react";
 
class Displaylist extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state={ check: ''}

    this.createTasks = this.createTasks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e){
      console.log(e)
      //console.log(this.props.inputs)
    var baabu= this.props.inputs
    if (this.state.check === 'check'){
        this.setState({check: ''});
    } else {
        this.setState({check: 'check'});
    }

}

  createTasks(item) {//console.log(this.state)
    return <div className={this.state.check} key={item.key} onClick={() => this.handleClick(item.key)} >{item.text}</div>
  }
 
  render() {
    var listinputs = this.props.inputs;
    var listItems = listinputs.map(this.createTasks);
    //console.log(this.props)
 
    return (
      <ul>
          {listItems}
      </ul>
    );
  }
};
 
export default Displaylist;
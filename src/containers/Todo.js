import React, { Component } from "react";
import Displaylist from "./displaylist";

 
class Todo extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            items: []
          };
       
          this.addItem = this.addItem.bind(this);
      };

addItem(event) {
    var itemArray = this.state.items;
       
    if (this._inputElement.value !== "") {
        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });
       
        this.setState({
            items: itemArray
        });
       
        this._inputElement.value = "";
        }
       
    //console.log(itemArray);
         
    event.preventDefault();
}


  render() {
    return (
    <div>
        <div>
            <form onSubmit={this.addItem}>
                <input 
                    placeholder="Enter Tasks"
                    ref={(input) => this._inputElement = input}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
        <Displaylist inputs={this.state.items} />
    </div>
    );
  }
}
 
export default Todo;
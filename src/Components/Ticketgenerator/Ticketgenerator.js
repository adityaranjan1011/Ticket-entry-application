import React, { Component } from "react";
// import { Card, div } from "@material-ui/core";
import "./Ticketgenerator.css";
import Spinnerwheel from "../Spinnerwheel/Spinnerwheel";
import backspace from "../../backspace.svg";
import deleteIcon from "../../delete-outline.svg";
import add from "../../plus-box.svg";

class Ticketgenerator extends Component {

  constructor() {
    super();
    this.cards = ["1", "2", "3", "4"];
    this.state = {
      count: "0",
      generateNumber: Number,
      clear:'',
      randomnumber: null
    };
    this.generate = this.generate.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  handle = (digit) => {
    const count = this.state.count;
    if (count.length < 6) {
      this.setState({
        count: count === "0" ? String(digit) : count + digit,       
      });
    }
  };
 clear = () =>{
   this.setState({
    count: this.state.count.slice(0, -1)
   })
 }
  deleteAll = () => {
    this.setState({
      count: "0",
    });
  };

  generate = (ele) => {
    const count_value = this.state.count;
    if (count_value.length === 6) {     
      this.setState({
        generateNumber: count_value,
        count: "0",        
      });
    }
  };

  selectItem = () => {  
    var minm = 100000;
    var maxm = 999999;

    if (this.state.randomnumber === null) {
      const randomnumber = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

      if (this.props.onSelectItem) {
        this.props.onSelectItem(randomnumber);
      }
      this.setState({ randomnumber : randomnumber});
    } 
    else {
      this.setState({ randomnumber: null });
      setTimeout(this.selectItem, 0);
    }
  };
 deleteTicket = () =>{
   this.setState({
    generateNumber : '',
   })
 }
 deleteSpinnerTicket = () => {
  this.setState({
    randomnumber: null
   })
 }
  render() {
   
    return (
      <div className="Ticketgenerator">
        <div className="generator-container">
          <div className="digit-container">
            <div className="digit-header">
              {this.state.count}
            </div>

            <div className="digit">
              <div className="numeric-values" onClick={() => this.handle(7)}>
                7
              </div>
              <div className="numeric-value" onClick={() => this.handle(8)}>
                8
              </div>
              <div className="numeric-value" onClick={() => this.handle(9)}>
                9
              </div>
              <div className="numeric-values" onClick={() => this.handle(4)}>
                4
              </div>
              <div className="numeric-value" onClick={() => this.handle(5)}>
                5
              </div>
              <div className="numeric-value" onClick={() => this.handle(6)}>
                6
              </div>
              <div className="numeric-values" onClick={() => this.handle(1)}>
                1
              </div>
              <div className="numeric-value" onClick={() => this.handle(2)}>
                2
              </div>
              <div className="numeric-value" onClick={() => this.handle(3)}>
                3
              </div>
              <div className="numeric-values" onClick = {this.clear}> <img src={backspace} alt="backspace"/></div>
              <div className="numeric-value" onClick={() => this.handle(0)}>
                0
              </div>
              <div className="numeric-value" onClick={this.deleteAll}>
                <img src={deleteIcon} alt="deleteIcon"/>
              </div>
            </div>

            <div className="digit-footer" onClick={this.generate}>
               <img src={add} style={{lineHeight:2}} alt="add"/> ADD TICKET
            </div>
          </div>
          <div className="spinner-container">
            <span> click the wheel to generate random tickets</span>

            <div className="spinnerwheel">
              <Spinnerwheel items={this.cards} selectedItem = {this.selectItem} randomnumber = {this.state.randomnumber}/>
            </div>

            <span className="ticket-text">
              Ticket number range : 100000-999999
            </span>
          </div>
        </div>
        <div className="selected-ticket">
          <span style={{ paddingLeft: "10px" }}> Your Selected Tickets : </span>
          <div className="card-container">
            <div className="cards">
            <img src={deleteIcon} alt="deleteIcon" className="deleteIcon" onClick={this.deleteTicket}/>
              <div className="ticket-card">
                <span className="card-text">Ticket  #1</span>
               <span className="ticket"> {this.state.generateNumber}</span> 
              </div>
            </div>
            <div className="cards"> 
            <img src={deleteIcon} alt="deleteIcon" className="second-deleteIcon" onClick={this.deleteSpinnerTicket}/>
              <div className="ticket-card">   
              <span className="card-text">Ticket  #2</span>             
              <span className="ticket"> {this.state.randomnumber}</span>
              </div>
            </div>
            {/* <div className="cards">
            <img src={deleteIcon} alt="deleteIcon" className="third-deleteIcon"/>
              <div className="ticket-card">
              <span className="card-text">Ticket  #3</span>
                <span className="ticket"> {this.state.generateNumber}</span>
                
              </div>
            </div> */}
            {/* <div className="cards">
            <img src={deleteIcon} alt="deleteIcon" className="fourth-deleteIcon"/>
              <div className="ticket-card">
              <span className="card-text">Ticket  #4</span>
                <span className="ticket"> {this.state.generateNumber}</span>
                
              </div>
            </div> */}
            {/* <div className="cards">
            <img src={deleteIcon} alt="deleteIcon" className="fifth-deleteIcon"/>
              <div className="ticket-card">
              <span className="card-text">Ticket  #5</span>
                <span className="ticket"> {this.state.generateNumber}</span>
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Ticketgenerator;

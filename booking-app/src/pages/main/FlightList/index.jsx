import React, { Component } from 'react';
import './flight-list.css';
import axios from "axios";
import FlightListItem from '../../../components/FlightListItem';


class FlightList extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      bookingList: []
    };
 
    this.renderRecipes = this.renderRecipes.bind(this);
  }

  state = {
    bookingList: []
  };

  componentDidMount(){
    axios
      .get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
      .then(({ data })=> {
        this.setState(
          { bookingList: data }
        );
      })
      .catch((err)=> {})
  }
 
  render() {
    
    return(
      <div className="flight-holder">
          <h5 className="title-page">My booking</h5>
          <h6 className="subtitle">UPCOMMIG</h6>
           {this.renderRecipes().upcommingList}
          <h6 className="subtitle">PAST</h6>

           {this.renderRecipes().pastList}
      </div>
    );
  }
 
  renderRecipes() {
    var result = {};
    result.upcommingList = [];
    result.pastList = [];
    var now = new Date();
    this.state.bookingList.forEach(item => {
      if(new Date(item.outboundDate) <= now){
        result.pastList.push(
          <FlightListItem itemContent={item}/>
        )
      }else{
        result.upcommingList.push(
          <FlightListItem itemContent={item}/>
        )
      }
      
    });
    
    return result;
  }
}

export default FlightList;

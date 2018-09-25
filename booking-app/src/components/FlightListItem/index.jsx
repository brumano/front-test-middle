import React, { Component } from 'react';
import moment from 'moment'
import './flight-list-item.css';


class FlightListItem extends Component {

    statusOfLoading={
        isLoading:1,
        isLoaded:2,
        error:3
    }
    
    constructor(props) {
        super(props);
        this.state = { loadingStatus: this.statusOfLoading.isLoading };
    }
    
    handleImageLoaded() {
        this.setState({ loadingStatus: this.statusOfLoading.isLoaded });
    }
    
    handleImageErrored() {
        this.setState({ loadingStatus: this.statusOfLoading.error });
    }

    render() {
      
    
        this.itemContent = this.props.itemContent;

        return (
      
            <div className="flight-list-item">
         
                <h4 className="destination">{this.itemContent.destination}</h4>
                <div className="thumb">
                    <img className={this.state.loadingStatus == this.statusOfLoading.isLoaded? "show" : ""} src={this.itemContent.thumb} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)}/>
                </div>
                <span className="date">{moment(this.itemContent.outboundDate).format("MMM DD") + " - " + moment(this.itemContent.inboundDate).format("MMM DD") }</span>
                
            </div>
      
        );
    }
}

export default FlightListItem;

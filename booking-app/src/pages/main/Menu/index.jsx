import React, { Component } from 'react';
// eslint-disable-next-line 
import TravellingIcon from '-!svg-react-loader?!../../../assets/images/svgs/travelling-icon.svg';
// eslint-disable-next-line 
import MapsIcon from '-!svg-react-loader?!../../../assets/images/svgs/maps-icon.svg';
// eslint-disable-next-line 
import TargetIcon from '-!svg-react-loader?!../../../assets/images/svgs/target-icon.svg';
// eslint-disable-next-line 
import BagIcon from '-!svg-react-loader?!../../../assets/images/svgs/bag-icon.svg';


import './menu.css'


class Menu extends Component {
  render() {

    return (
      
        <div className="menu-holder">
      
            <div className="menu-navigation-itens ">
                <button className="btn btn-lg no-bg no-padding -invert">
                    <span className="svg-icon-base ">
                        <TravellingIcon/>
                    </span>
                    Book Flights
                    
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base">
                        <MapsIcon/>
                    </span>
                    Map View
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base ">
                        <TargetIcon/>
                    </span>
                    Flight Status
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base">
                        <BagIcon/>
                    </span>
                    My Profile
                </button>
            </div>
        </div>

    );
  }
}

export default Menu;


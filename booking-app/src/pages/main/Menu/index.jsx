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
      
        <div className="menu-holder animated">
      
            <div className="menu-navigation-itens ">
                <button className="btn btn-lg no-bg no-padding ">
                    <span className="svg-icon-base ">
                        <TravellingIcon/>
                    </span>
                    <span className="text animated">Book Flights</span>
                    <hr/>
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding ">
                    <span className="svg-icon-base">
                        <MapsIcon/>
                    </span>
                    <span className="text animated">
                        Map View
                    </span>

                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding ">
                    <span className="svg-icon-base ">
                        <TargetIcon/>
                    </span>
                    <span className="text animated">
                        Flight Status
                    </span>

                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding ">
                    <span className="svg-icon-base">
                        <BagIcon/>
                    </span>
                    <span className="text animated">
                        My Profile
                    </span>
                </button>
            </div>
        </div>

    );
  }
}

export default Menu;


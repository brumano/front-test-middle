import React, { Component } from 'react';





import './menu.css'


class Menu extends Component {
  render() {

    return (
      
        <div className="menu-holder">
      
            <div className="menu-navigation-itens ">
                <button className="btn btn-lg no-bg no-padding -invert">
                    <span className="svg-icon-base md travelling-icon"></span>
                    Árvore
                    
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base md map-icon"></span>
                    Gustavo
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base md target-icon"></span>
                        Central de Trocas
                </button>
                <button className="btn btn-lg no-bg svg-icon sm no-padding -invert">
                    <span className="svg-icon-base md bag-icon"></span>
                        Dicas
                </button>
            </div>
        </div>

    );
  }
}

export default Menu;


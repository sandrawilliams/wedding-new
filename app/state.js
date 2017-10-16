/*In main App*/
class App extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
         header: "Header from props..."
      }
   }

    render() {
        return (
        <div>
            <Header headerProp = {this.state.header}/>
        </div>
        );
    }
};

/*In Component*/
import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

export default Header;
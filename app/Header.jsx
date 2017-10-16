import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
   render() {
   	  const element = <Header name="Sandra" />;
      return (
         <div>
           	<h1>Hello, {this.props.name}</h1>
         </div>
      );
   }
}

export default Header;
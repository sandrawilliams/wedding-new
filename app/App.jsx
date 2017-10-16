import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { hashRouter, Route, IndexRoute, Link } from 'react-router-dom';

import Couple from './Couple.jsx';
import Story from './Story.jsx';
import Events from './Events.jsx';
import BridalParty from './BridalParty.jsx';
import Header from './Header.jsx';

const Badge = styled.div`
    background: url("./src/images/heart.png") no-repeat top rgba(70, 178, 188, .9);
    border-radius: 100%;
    display: table;
    margin: 100px auto;
    position: relative; 
    height: 370px;
    width: 370px;
    text-align: center;
    h1 {
        font-family: Shadows Into Light;
        font-size: 55px;
        line-height: 35px;
        display: table-cell;
        vertical-align: middle;
        color: white;
        letter-spacing: 2px;
        text-shadow: rgba(0, 0, 0, 0.44) 2px 2px;
        padding-bottom: 20px;
        span {
            display: block;
            font-size: 28px;
            border-bottom: dashed 2px;
            margin: 0 30px;
            padding: 10px 0 25px;
        }
    }
    h3 {
        bottom: 80;
        position: absolute;
        left: 0;
        right: 0;
        font-size: 20px;
        width: 65%;
        margin: -15px auto;
        color: #f8ddff;
        text-shadow: 2px 2px #717070;
        line-height: 27px;
        letter-spacing: 1;
    }
`;

class App extends React.Component {
    render() {
        
        return (
        <div>
            <Badge>
                <h1>Ian & Sandra<span>Are Getting Married</span></h1>
                <h3>22nd September 2018 <span>Dubrovnik</span></h3>
            </Badge>            

        </div>
        );
    }
};

ReactDOM.render(
    <hashRouter>  
        <Header />      
        <App />
        <Couple />     
        <Story />
        <Events />
        <BridalParty />
    </hashRouter>,

    document.getElementById('app')
);

export default App;
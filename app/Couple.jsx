import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';

const Wrapper = styled.div`
    background-color: #f9f9f9;
    padding: 75px 0;

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
`;

const Inner = styled.div`
    width: 1170px;
    margin: auto;
`;

const Person = styled.div`
    position: relative;
    text-align: center;
	width: 50%;
	float: left;

    h3 {
        font-size: 24px;
    }

	div.image {
		text-align: center;

		img {
			border-radius: 50%;
			height: 350px;
		}
	}

    .details {
        margin-top: 25px;
    }
`;

const Content = styled.div`
    overflow: auto;
`;


const Border = styled.div`
    position: absolute;
    bottom: 70px;
    left: 0;
    right: 0;

    > img {
        margin: 0 auto;
        width: 60%;
    }
`;

class Couple extends React.Component {

  render() {
    return (
        <Wrapper>
            <Inner>
                        <Header></Header> 
                    <h2>Happy Couple</h2>
                    <span className="line"> </span>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span className="line"> </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos voluptate reprehenderit inventore quis dicta, aliquam possimus, explicabo assumenda, dolore consequatur praesentium iusto odio esse corporis fugiat pariatur a vel.</p>

                <Content>
                    <Person>
                        <div className="image">
                            <img src={'./src/images/sandra-williams.jpg'} />
                        </div> 

                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <div className="details">
                            <h3>Sandra Williams</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos voluptate reprehenderit invetntore quis dicta, aliquam possimuenda</p>
                        </div>              
                    </Person> 

                    <Person>
                        <div className="image">
                            <img src={'./src/images/ian-mckie.jpg'} />
                        </div>

                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <div className="details">
                            <h3>Ian McKie</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos voluptate reprehenderit invetntore quis dicta, aliquam possimuenda</p>
                        </div>      
                    </Person>
                </Content>                
            </Inner>
        </Wrapper>
    );
  }
}

export default Couple;
import React from 'react';
import styled from 'styled-components';

/*import frame from 'C:/Users/Ian/Desktop/wedding-new/images/frame.png';*/

const Col = styled.div`
    width: 25%;
    text-align: center;
    float: left;
    position: relative
`;

const Border = styled.div`
    position: absolute;
    bottom: 30px;

    > img {
        width: 65%
    }
`;

const MemberImage = styled.div`
    border-radius;

    > img {
        border-radius: 50%;
        height: 300px;
    }
`;

const Wrapper = styled.div`
    background-color: #f9f9f9;
    overflow: auto;
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

const Header = styled.div`
    color: #000;
    text-align: center;
    margin: 0 auto;
    width: 55%;

    h2 {
        font-size: 35px;
        margin-bottom: 15px;
    }

/*    .fa:before {
        content: "hello";
    }*/
`;

class BridalParty extends React.Component {
  render() {
    return (
        <Wrapper>
            <Inner>
            <Header>
                <h2>The Bridal Party</h2>
                <h3>Bridesmaids and Groomsmen</h3>
            </Header>
                <div>
                    <Col>
                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <MemberImage>
                            <img src="./src/images/tanya-williams.jpg" />
                        </MemberImage>

                        <h3>Tanya Williams</h3>
                        <p>Maid of Honor + Bride Sister</p>
                    </Col>

                    <Col>
                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <MemberImage>
                            <img src="./src/images/marie-tighe.jpg" />
                        </MemberImage>

                        <h3>Marie Tighe</h3>
                        <p>Bride Friend</p>
                    </Col>

                    <Col>
                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <MemberImage>
                            <img src="./src/images/mary-corcoran.jpg" />
                        </MemberImage>

                        <h3>Mary Corcoran</h3>
                        <p>Bride Friend</p>
                    </Col>

                    <Col>
                        <Border>
                            <img src="./src/images/frame.png" />
                        </Border>

                        <MemberImage>
                            <img src="./src/images/eilish-murphy.jpg" />
                        </MemberImage>

                        <div>
                            <h3>Eilish Murphy</h3>
                            <p>Bride Friend</p>
                        </div>
                    </Col>
                </div>
            </Inner>
        </Wrapper>
    );
  }
}

export default BridalParty;


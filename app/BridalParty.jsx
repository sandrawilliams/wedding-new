import React from 'react';
import styled from 'styled-components';

/*import frame from 'C:/Users/Ian/Desktop/wedding-new/images/frame.png';*/

const Inner = styled.div`
    width: 25%;
    text-align: center;
    float: left;
    position: relative
`;

const Border = styled.div`
    position: absolute;
    bottom: 18;

    > img {
        width: 65%
    }
`;

const MemberImage = styled.div`
    border-radius;

    > img {
        border-radius: 50%
    }
`;


class BridalParty extends React.Component {

  render() {
    return (
        <div>
            <h2>The Bridal Party</h2>
            <h3>Bridesmaids and Groomsmen</h3>
            <div>
                <Inner>
                    <Border>
                        <img src="./images/frame.png" />
                    </Border>

                    <MemberImage>
                        <img src="./images/tanya-williams.jpg" />
                    </MemberImage>

                    <h3>Tanya Williams</h3>
                    <p>Maid of Honor + Bride Sister</p>
                </Inner>

                <Inner>
                    <Border>
                        <img src="./images/frame.png" />
                    </Border>

                    <MemberImage>
                        <img src="./images/marie-tighe.jpg" />
                    </MemberImage>

                    <h3>Marie Tighe</h3>
                    <p>Bride Friend</p>
                </Inner>

                <Inner>
                    <Border>
                        <img src="./images/frame.png" />
                    </Border>

                    <MemberImage>
                        <img src="./images/mary-corcoran.jpg" />
                    </MemberImage>

                    <h3>Mary Corcoran</h3>
                    <p>Bride Friend</p>
                </Inner>

                <Inner>
                    <Border>
                        <img src="./images/frame.png" />
                    </Border>

                    <MemberImage>
                        <img src="./images/eilish-murphy.jpg" />
                    </MemberImage>

                    <h3>Eilish Murphy</h3>
                    <p>Bride Friend</p>
                </Inner>
            </div>
        </div>
    );
  }

}

export default BridalParty;


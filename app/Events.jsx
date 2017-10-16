import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #ff6e8d;
    padding: 75px 0;

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
`;

const Inner = styled.div`
    width: 1170px;
    margin: auto;
`;

const Section = styled.div`
    padding: 15px;
    width: 33.333%;
    float: left;
    box-sizing: border-box;

    img {
        width: 100%;
    }
`;

const Details = styled.div`
    color: white;

    p {
        font-size: 16px;
        margin: 15px 0;
    }

    h3 {
        font-size: 24px;
        margin: 25px 0 0;
    }

    h6 {
        font-size: 16px;
        font-weight: normal;
        padding: 3px 0;

        .fa-map-marker:before {
            padding-right: 5px;
        }
    }
`;

const Header = styled.div`
    color: white;
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

const Content = styled.div`
    overflow: auto;
`;

class Events extends React.Component {

  render() {
    return (
        <Wrapper>            
            <Inner>
                <Header>
                    <h2>The Wedding Events</h2>
                    <span className="line"> </span>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span className="line"> </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos voluptate reprehenderit inventore quis dicta, aliquam possimus, explicabo assumenda, dolore consequatur praesentium iusto odio esse corporis fugiat pariatur a vel.</p>
                </Header>
                <Content>
                    <Section>
                        <div>
                            <img src={'./src/images/old-town.jpg'} />
                        </div>
                        <Details>
                            <h3>Ceremony</h3>
                            <p>Guests can gather by 13:10 the latest and will be guided through the Old Town to the venue within.</p>                            
                            <h6><i className="fa fa-map-marker" aria-hidden="true"></i> Ploce gate Entrance, Old Town Dubrovnik.</h6>
                            <h6><i className="fa fa-clock-o" aria-hidden="true"></i> {"13:30"} - Ceremony begins</h6>
                        </Details>              
                    </Section>

                    <Section>
                        <div>
                            <img src={'./src/images/secret.jpg'} />
                        </div>
                        <Details>
                            <h3>{"It's a Surprise"}</h3>
                            <p>After the ceremony you will have an hour to relax and enjoy the Old Town followed by a surprise {"event"}!</p>                
                            <h6><i className="fa fa-map-marker" aria-hidden="true"></i> To be confirmed...</h6>
                            <h6><i className="fa fa-clock-o" aria-hidden="true"></i> {"15:00"} - Reconveine at the ceremony venue.</h6>
                        </Details>              
                    </Section>

                    <Section>
                        <div>
                            <img src={'./src/images/reception.jpg'} />
                        </div>
                        <Details>
                            <h3>Reception</h3>
                            <p>Transport will be provided to the reception venue. Guests can arrive to the VIP area at approx {"17:30"}.</p>                            
                            <h6><i className="fa fa-map-marker" aria-hidden="true"></i> Lapad Region</h6>
                            <h6><i className="fa fa-clock-o" aria-hidden="true"></i> {"16:45"} - Arrival at reception.</h6>
                        </Details>              
                    </Section>
                </Content>
            </Inner>
        </Wrapper>
    );
  }
}

export default Events;
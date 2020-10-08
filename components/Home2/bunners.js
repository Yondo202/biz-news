import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export class bunners extends Component {
    render() {
        // console.log(this.props.bunner2, 'bunner yma')
        const bunner2 = this.props.bunner2
        return (
            <Container fluid style={{width:'60%'}} className="bunnerPar">
                <Row>
                    <div className="golMenu">
                        <Col md={12} sm={12} xs={12}>
                            <div className="TopBunner">
                                <div className="text">
                                    <a href="http://youtube.com" target="_blank">
                                        <h5>
                                            Best Business websiteees 
                                        </h5>
                                    </a>
                                </div>
                                <div className="image">
                                    <img src={require('../image/forest.jpg')} />
                                    <div className="title">
                                        <h5>" Bunner Ads "</h5>
                                    </div>
                                </div>
                                <div className="ghost">
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default bunners

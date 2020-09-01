import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export class bunners extends Component {
    render() {
        return (
            <Container className="bunnerPar">
                    <Row>
                        <div className="golMenu">
                            <Col md={2}>
                            </Col>
                            <Col md={8} sm={12} xs={12}>
                                <div className="TopBunner">
                                    <div className="text">
                                        <h5>
                                            Best Business ,
                                            News Magazine
                                      </h5>
                                    </div>
                                    <div className="image">
                                        <img src={require('../image/forest.jpg')} />
                                        <div className="title">
                                            <h5>Banner Ad</h5>
                                        </div>
                                    </div>
                                    <div className="ghost">

                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                            </Col>
                        </div>
                    </Row>
                </Container>
        )
    }
}

export default bunners

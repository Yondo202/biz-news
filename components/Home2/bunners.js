import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export class bunners extends Component {
    render() {
        console.log(this.props.bunner2, 'bunner yma')
        const bunner2 = this.props.bunner2
        return (
            <Container className="bunnerPar">
                <Row>
                    <div className="golMenu">
                        <Col md={2}>
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <div className="TopBunner">
                                <div className="text">
                                    <a href={bunner2.url} target="_blank">
                                        <h5>
                                            {bunner2.title}
                                        </h5>
                                    </a>
                                </div>
                                <div className="image">
                                    <img src={`${bunner2.image.url}`} />
                                    <div className="title">
                                        <h5>{bunner2.nemelt}</h5>
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

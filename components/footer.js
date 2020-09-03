import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti'


class footer extends Component {
    render() {
        return (
            <>
                <div className="footPar">
                    <Container fluid >
                        <Row style={{ paddingTop: 36}} >
                            <Col md={1}>
                            </Col>
                            <Col md={3}>
                                <div className="footLogo">
                                    <img src={require('./image/bizlogo1.png')} />
                                    <p>Find B2B and B2C business contact addresses, phone numbers, city events and news.</p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="footMenu1">
                                    <h5>Quick Links</h5>
                                    <div className="menu">
                                        <Link href="/">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Home</p>
                                            </div>
                                        </Link>

                                        <Link href="/posts">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>News</p>
                                            </div>
                                        </Link>

                                        <Link href="/videos">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Video</p>
                                            </div>
                                        </Link>

                                        <Link href="/audio">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Audio</p>
                                            </div>
                                        </Link>

                                        <div className="float">
                                            <MdKeyboardArrowRight /><p>GiveAway</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="footMenu2">
                                    <h5>Contact Us</h5>
                                    <div className="menu">
                                        <span>Phone:</span>
                                        <p>(976) 9965 7890</p>
                                    </div>
                                    <div className="menu">
                                        <span>Location:</span>
                                        <p>СХД - 15-р хорооо 34р байр 55тоот</p>
                                    </div>
                                    <div className="menu">
                                        <span>Email:</span>
                                        <p className="After" data-tool='dada, mama' >ReteWorld@gmail.com</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="footMenu3">
                                    <h5>Follow us</h5>
                                    <div className="menu">
                                        <GrFacebookOption />
                                        <AiOutlineTwitter />
                                        <AiOutlineGooglePlus />
                                        <AiFillInstagram />
                                        <TiSocialYoutubeCircular />
                                    </div>
                                </div>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>

                    </Container>
                </div>
                <div className="footEnd">
                    <h5>© 2020. Powered By rete agency. All Right Reserved. Term and Condition | Privacy Policy</h5>
                </div>
            </>


        );
    }
}

export default footer;

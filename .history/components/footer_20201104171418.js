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
                    <Container fluid style={{width:'70%'}} >
                        <Row style={{ paddingTop: 36}} >
                            <Col md={3}>
                                <div className="footLogo">
                                    <img src={require('./image/bizi.png')} alt="myImageHere" />
                                    <p>Завгүй хүмүүст зориулав.</p>
                                    <Link href="/Ridacts">
                                        <h5>Редакцын бодлого</h5>
                                    </Link>
                                </div>
                            </Col>
                          
                            <Col md={3}>
                                <div className="footMenu1">
                                    <h5>Quick Links</h5>
                                    <div className="menu">
                                        <Link href="/">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Нүүр</p>
                                            </div>
                                        </Link>

                                        <Link href="/posts">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Мэдээ</p>
                                            </div>
                                        </Link>

                                        <Link href="posts/business">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Бизнес</p>
                                            </div>
                                        </Link>
                                        <Link href="posts/conversation">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Ярилцлага</p>
                                            </div>
                                        </Link>

                                        <Link href="/videos">
                                            <div className="float">
                                                <MdKeyboardArrowRight /><p>Видео</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="footMenu2">
                                    <h5>Холбоо барих</h5>
                                    <div className="menu">
                                        <span>Утас:</span>
                                        <p>72101072</p>
                                    </div>
                                    <div className="menu">
                                        <span>Хаяг:</span>
                                        <p>Сүхбаатар дүүрэг, Бага тойруу, Атимос 48, 201тоот</p>
                                    </div>
                                    <div className="menu">
                                        <span>Е мэйл:</span>
                                        <p className="After" data-tool='dada, mama' >ReteWorld@gmail.com</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="footMenu3">
                                    <h5>Follow us</h5>
                                    <div className="menu">
                                        <Link href='https://www.facebook.com/www.bizi.mn' >
                                            <a target="_blank">
                                                 <GrFacebookOption />
                                            </a>
                                        </Link>
                                        <AiOutlineTwitter />
                                        <AiFillInstagram />
                                        <TiSocialYoutubeCircular />
                                    </div>
                                </div>
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

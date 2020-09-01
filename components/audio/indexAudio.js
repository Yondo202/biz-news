import React, { Component } from 'react'

import { GiPlayButton } from 'react-icons/gi'
import { MdPlayCircleOutline } from 'react-icons/md'

import AudioPlayer from 'react-h5-audio-player';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

export class Audio extends Component {
    render() {
        return (
            <div className="audioPar">
                <Container className="betweenNewsPar">
                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                        <Row style={{ marginTop: 30 }}>
                            <Col md={4}>
                                <div className="TopSmall">
                                    <img src={require('../image/last3.png')} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                            <h2>
                                                8Bit Coin Sets Market Alight With Initial Performance
                                         </h2>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <MdDateRange />
                                                <span>
                                                    March 23, 2019
                                            </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="TopSmall">
                                    <img src={require('../image/last1.jpg')} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                            <h2>
                                                8Bit Coin Sets Market Alight With Initial Performance
                                </h2>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <MdDateRange />
                                                <span>
                                                    March 23, 2019
                                    </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="TopSmall">
                                    <img src={require('../image/last2.jpg')} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                            <h2>
                                                8Bit Coin Sets Market Alight With Initial Performance
                                </h2>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <MdDateRange />
                                                <span>
                                                    March 23, 2019
                                    </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </div>
        )
    }
}

export default Audio

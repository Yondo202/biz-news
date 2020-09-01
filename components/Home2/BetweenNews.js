import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

export class BetweenNews extends Component {
    render() {
        const HomeVideos = this.props.HomeVideos
        // console.log(HomeVideos, 'bababba')
        // const videoData = HomeVideos.slice(0,3)
        return (

            <Container className="betweenNewsPar">
                <Row>

                    {HomeVideos.slice(0,3).map((el, i) => {
                            return (
                                <Col Col md={4} key={i} >
                                    <div className="TopSmall">
                                        <img src={`http://localhost:1337${el.image.url}`} />
                                        <div className="background"></div>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Video</span>
                                            </div>
                                            <div className="Title">
                                                <Link href='videos/[slug]' as={`videos/${el.slug}`}>
                                                    <h2>
                                                        {el.title}
                                                    </h2>
                                                </Link>

                                            </div>
                                            <div className="smallCont">
                                                <div className="date">
                                                    <MdDateRange />
                                                    <span>
                                                        {el.date}
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
                            )
                    })}



                    {/* {HomeVideos.filter == 'video' ? HomeVideos.map((el, i) => {
                        return (
                            <Col Col md={4} >
                                <div className="TopSmall">
                                    <img src={require('../image/top2.jpg')} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>{el.filter}</span>
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
                        )
                    }) : false} */}




                    {/* 
                    <Col md={4}>
                        <div className="TopSmall">
                            <img src={require('../image/top2.jpg')} />
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
                            <img src={require('../image/top2.jpg')} />
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
                    </Col> */}




                </Row>
            </Container >
        )
    }
}

export default BetweenNews

import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import { RiHome3Line } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

export class topReadNews extends Component {
    render() {
        const AllNews = this.props.AllNews
        const myData = AllNews.slice(0, 3);
        // console.log(myData, 'odoo jinken');
        return (
            <Container className="topReadNews">
                <Row style={{ marginTop: 50 }}>
                    <Col md={9}>
                        <div className="NewsPar">
                            <div className="Title">
                                <h3>Famous News</h3>
                                <div className="line"><div className="line2"></div></div>
                            </div>

                            {AllNews.slice(0, 3).map((el, index) => {
                                console.log(index, ' this is index')
                                    //  const CondIndex = index
                                    return (
                                        <div className='contPar' key={index}>
                                            <Row>
                                                <Col md={3}>
                                                    <div className="imgPar">
                                                        <img src={`${el.photos[0].url}`} />
                                                        <div className="hover1"></div>
                                                        <div className="hover2"></div>
                                                    </div>
                                                </Col>
                                                <Col md={9}>
                                                    <div className="content">
                                                        <div className="catigory">
                                                            <span>Business</span>
                                                        </div>
                                                        <div className="Title1">
                                                            <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
                                                                <h6>
                                                                    {/* 8Bit Coin Sets Market Alight With Initial Performance */}
                                                                    {el.title}
                                                                </h6>
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
                                                        <div className="Desc">
                                                           {el.desc}
                                                </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                            })}







                            {/* <div className='contPar'>
                                <Row>
                                    <Col md={4}>
                                        <div className="imgPar">
                                            <img src={require('../image/last2.jpg')} />
                                            <div className="hover1"></div>
                                            <div className="hover2"></div>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Business</span>
                                            </div>
                                            <div className="Title1">
                                                <h5>
                                                    Франкфуртаас 261 иргэн эх орондоо ирлээ
                                                </h5>
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
                                            <div className="Desc">
                                                Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh  Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh  Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='contPar'>
                                <Row>
                                    <Col md={4}>
                                        <div className="imgPar">
                                            <img src={require('../image/last1.jpg')} />
                                            <div className="hover1"></div>
                                            <div className="hover2"></div>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Business</span>
                                            </div>
                                            <div className="Title1">
                                                <h5>
                                                    Франкфуртаас 261 иргэн эх орондоо ирлээ
                                                </h5>
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
                                            <div className="Desc">
                                                Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh  Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh  Франкфурт-Улаанбаатар чиглэлийн тусгай үүргийн онгоц өнөөдөр 06:05 цагт Буянт-Ухаа олон улсын нисэх буудалд газардлаа.sdgsd sd gs dfh df hfh dfhdh
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
                        </div>
                    </Col>


                    <Col md={3}>

                        <div className="BunnerPaR">
                            <Row>
                                <Col md={12}>
                                    <div className="bunner">
                                        <section className="homeVide"
                                            style={{
                                                position: `relative`,
                                                height: `100%`,
                                                height: `-moz-available`,
                                                height: `-webkit-fill-available`,
                                                height: `fill-available`,
                                                minHeight: `100%`,
                                                width: `100%`,
                                                zIndex: `1`,
                                                overflow: `hidden`,
                                            }}
                                        >
                                            <div className="background">
                                            </div>
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{
                                                    position: `absolute`,
                                                    left: `50%`,
                                                    top: `50%`,
                                                    transform: `translate(-50%,-50%)`,
                                                    width: `auto`,
                                                    height: `auto`,
                                                    minHeight: `100%`,
                                                    minWidth: `100%`,
                                                }}
                                            >
                                                {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}


                                                {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
                                            </video>
                                        </section>
                                        {/* <img src={require('../image/forest.jpg')} /> */}
                                        <div className="contents">
                                            <span>Banner Area Banner Area
                                            250 x 300
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="bunner">
                                        <section className="homeVide"
                                            style={{
                                                position: `relative`,
                                                height: `100%`,
                                                height: `-moz-available`,
                                                height: `-webkit-fill-available`,
                                                height: `fill-available`,
                                                minHeight: `100%`,
                                                width: `100%`,
                                                zIndex: `1`,
                                                overflow: `hidden`,
                                            }}
                                        >
                                            <div className="background">
                                            </div>
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{
                                                    position: `absolute`,
                                                    left: `50%`,
                                                    top: `50%`,
                                                    transform: `translate(-50%,-50%)`,
                                                    width: `auto`,
                                                    height: `auto`,
                                                    minHeight: `100%`,
                                                    minWidth: `100%`,
                                                }}
                                            >
                                                {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}


                                                {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
                                            </video>
                                        </section>
                                        {/* <img src={require('../image/forest.jpg')} /> */}
                                        <div className="contents">
                                            <span>Banner Area Banner Area
                                            250 x 300
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default topReadNews

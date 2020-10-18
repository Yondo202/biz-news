import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import Link from 'next/link'
export class HomeVideo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const HomeVideos = this.props.HomeVideos
        console.log(HomeVideos, 'its is my video news')

        return (
            <Container fluid style={{width:'70%'}} className="VideoConPar">
                <Row style={{ marginBottom: 30 }}>
                    {HomeVideos.slice(0, 3).map((el, i) => {
                        return (
                            <Col md={4}>
                                <div className="TopSmall">
                                    {/* <img src={`${Brandfilter[0].image.url}`} /> */}
                                    <img className="mainImg" src={el.image.url} alt="myImage" />
                                    <div className="background"></div>
                                    <img className="logoImg" src={require('../image/play-button.svg')}  alt="myImage"></img>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>{el.bulan}</span>
                                        </div>
                                        <div className="Title">
                                            <Link href={`${el.path}/[slug]`} as={`${el.path}/${el.slug}`}>
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

                </Row>
            </Container>
        )
    }
}

export default HomeVideo

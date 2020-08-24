import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import {FaRegPlayCircle} from 'react-icons/fa'


export class HomeVideo extends Component {


    render() {
        // console.log(VideoData.Url2, 'hahah')
        const Data = this.props.allVideo
        return (
            <div style={{ marginTop: 100 }} className="allvideoPAr">
                <Container className="containers" fluid style={{ width: '85%' }}>
                    <Row>
                        {Data.map((el, i) => {
                            return (
                                <Col key={i} md={3}>
                                    <div className="conPar">
                                        <div className="img">
                                            <div><FaRegPlayCircle></FaRegPlayCircle></div>
                                            <img src={`http://localhost:1337${el.image.url}`} />
                                        </div>
                                        <h6>{el.title} </h6>
                                        <Link href="/videos/[id]" as={`/videos/${el.slug}`} >
                                            <button type="button">Дэлгэрэнгүй...<BsBoxArrowInLeft /></button>
                                        </Link>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeVideo



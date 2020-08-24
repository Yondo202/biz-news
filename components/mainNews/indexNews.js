import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFillClockFill, BsBoxArrowInLeft } from 'react-icons/bs'
import Link from 'next/link'
import SearchInp from '../Home/search'



export class indexNews extends Component {

    render() {
        console.log('asdada', this.props.allPost)
        const Data = this.props.allPost
        return (
            <div  className="allNewsPAr">
                <div style={{height:70, backgroundColor:'rgba(0, 0,0, 0.9)', marginBottom:60}}></div>
                <Container className="containers" fluid style={{ width: '85%' }}>
                    <Row style={{ marginBottom: 40 }}>
                        <Col>
                            <SearchInp />
                        </Col>
                    </Row>
                    <Row>
                        {Data.map((el, i) => {
                            return (
                                <Col key={i} md={3}>
                                    <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
                                        <div className="conPar">
                                            <div className="img">
                                                <img src={`http://localhost:1337${el.photos[0].url}`} />
                                            </div>
                                            <h6>{el.title} </h6>
                                            <button type="button">Дэлгэрэнгүй...<BsBoxArrowInLeft /></button>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default indexNews


import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'


let easing = [0.5, 0.3, 0.11, 0.95];
const textVariants = {
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: easing }
    }
};


const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export class Business extends Component {
    render() {
        const Data = this.props.allPost
        const filterData = Data.filter(e => e.filter === "Business")
        return (
            <Container className="betweenNewsPar" fluid style={{ width: '70%' }}>
                <Row style={{ marginTop: 30 }}>
                    {filterData.map((el, i) => {
                        return (
                            <Col key={i} md={4}>
                                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                    <div className="TopSmall">
                                        <img src={`${el.image.url}`} alt="myImageHere" />
                                        <div className="background"></div>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>{el.filter}</span>
                                            </div>
                                            <div className="Title">
                                                <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
                                                    <h2>
                                                        {/* 8Bit Coin Sets Market Alight With Initial Performance */}
                                                        {el.title}
                                                    </h2>
                                                </Link>
                                            </div>
                                            <div className="smallCont">
                                                <div className="date">
                                                    <MdDateRange />
                                                    <span>
                                                        {/* March 23, 2019 */}
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
                                    <div style={{ marginBottom: 20 }}></div>
                                </motion.div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default Business



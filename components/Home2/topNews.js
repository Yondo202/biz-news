import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

export class topNews extends Component {
    render() {
        console.log(this.props.TopNews1[0].title, 'main Data1')
        console.log(this.props.TopNews2, 'main Data2')
        console.log(this.props.TopNews3, 'main Data3')
        return (
            <Container>
                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                    <div className="TopNewsPar">
                        <Row>
                            <Col md={7}>
                                <div className="TopBig">
                                    <img src={`http://localhost:1337${this.props.TopNews1[0].photos[0].url}`} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                            <Link href="/posts/[slug]" as={`/posts/${this.props.TopNews1[0].slug}`}>
                                                <h2>
                                                    {this.props.TopNews1[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                    {this.props.TopNews1[0].date}
                                                </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                            </span>
                                            </div>
                                            <div className="comments">
                                                <FaRegComment />
                                                <span>
                                                    5
                                            </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="TopSmall">
                                    <img src={`http://localhost:1337${this.props.TopNews2[0].photos[0].url}`} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                            <Link href="/posts/[slug]" as={`/posts/${this.props.TopNews2[0].slug}`}>
                                                <h2>
                                                    {this.props.TopNews2[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                    {this.props.TopNews2[0].date}
                                                </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                            </span>
                                            </div>
                                            <div className="comments">
                                                <FaRegComment />
                                                <span>
                                                    5
                                            </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="TopSmall2">
                                     <img src={`http://localhost:1337${this.props.TopNews3[0].photos[0].url}`} />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>Business</span>
                                        </div>
                                        <div className="Title">
                                        <Link href="/posts/[slug]" as={`/posts/${this.props.TopNews3[0].slug}`}>
                                                <h2>
                                                    {this.props.TopNews3[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                {this.props.TopNews3[0].date}
                                            </span>
                                            </div>
                                            <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    185
                                            </span>
                                            </div>
                                            <div className="comments">
                                                <FaRegComment />
                                                <span>
                                                    5
                                            </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </motion.div>
            </Container>
        )
    }
}

export default topNews

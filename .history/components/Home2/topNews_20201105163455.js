import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { scale: 0.7, opacity: 0.5, transition: { duration: 0.9, ease: easing } },
    enter: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};


export class topNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log(this.props.AllNews,'check')
        const myData1 = this.props.AllNews.filter(e => e.slug == 'top-1')
        const myData2 = this.props.AllNews.filter(e => e.slug == 'top-2')
        const myData3 = this.props.AllNews.filter(e => e.slug == 'top-3')
        return (
            <Container fluid style={{ width: '70%' }}>
                <div className="TopNewsPar">
                    <Row>
                        <Col md={7}>
                            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                <div className="TopBig">
                                    <img src={`${myData1[0].image.url}`} alt="myBigPhoto" />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>{myData1[0].filter}</span>
                                        </div>
                                        <div className="Title">
                                            <Link href="/posts/[slug]" as={`/posts/${myData1[0].slug}`}>
                                                <h2 onClick={this.increment}>
                                                    {myData1[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                    {myData1[0].date}
                                                </span>
                                            </div>
                                            {/* <div className="SeeCount">
                                                <AiOutlineEye />
                                                <span>
                                                    {this.state.count}
                                                </span>
                                            </div> */}
                                            {/* <div className="comments">
                                                <FaRegComment />
                                                <span>
                                                    5
                                            </span>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                        <Col md={5}>
                            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>

                                <div className="TopSmall">
                                    <img src={`${myData2[0].image.url}`} alt="sm1Photo" />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>{myData2[0].filter}</span>
                                        </div>
                                        <div className="Title">
                                            <Link href="/posts/[slug]" as={`/posts/${myData2[0].slug}`}>
                                                <h2>
                                                    {myData2[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                    {myData2[0].date}
                                                </span>
                                            </div>
                                            {/* <div className="SeeCount">
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
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                <div className="TopSmall2">
                                    <img src={`${myData3[0].image.url}`} alt="sm2Photo" />
                                    <div className="background"></div>
                                    <div className="content">
                                        <div className="catigory">
                                            <span>{myData3[0].filter}</span>
                                        </div>
                                        <div className="Title">
                                            <Link href="/posts/[slug]" as={`/posts/${myData3[0].slug}`}>
                                                <h2>
                                                    {myData3[0].title}
                                                </h2>
                                            </Link>
                                        </div>
                                        <div className="smallCont">
                                            <div className="date">
                                                <span>
                                                    {myData3[0].date}
                                                </span>
                                            </div>
                                            {/* <div className="SeeCount">
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
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
export default topNews

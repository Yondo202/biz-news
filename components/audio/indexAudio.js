import React, { Component } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { Container, Row, Col } from 'react-bootstrap';
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

export class Audio extends Component {
    render() {
        console.log(this.props.MainAudio, 'keke')
        const MainAudio = this.props.MainAudio
        return (
            <div className="audioPar">
                <Container className="betweenNewsPar">
                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                        <Row style={{ marginTop: 30 }}>
                            {MainAudio.map((el, i) => {
                                return (
                                    <Col md={4} key={i}>
                                        <div className="TopSmall">
                                            <img src={`http://localhost:1337${el.image.url}`} />
                                            <div className="background"></div>
                                            <div className="content">
                                                <div className="catigory">
                                                    <span>Audio</span>
                                                </div>
                                                <div className="Title">
                                                    <Link href="/audio/[slug]" as={`/audio/${el.slug}`} >
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
                    </motion.div>
                </Container>
            </div>
        )
    }
}

export default Audio

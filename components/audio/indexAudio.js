import React, { Component } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
import Link from 'next/link'


let easing = [0.5, 0.3, 0.11, 0.95];
const textVariants = {
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        scale: 1,
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
                <Container className="betweenNewsPar" fluid style={{ width: '60%' }}>
                    <Row style={{ marginTop: 30 }}>
                        {MainAudio.map((el, i) => {
                            return (
                                <Col md={4} key={i}>
                                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                        <div className="TopSmall">
                                            <img src={`${el.image.url}`} />
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
                                        <div style={{ marginBottom: 20 }}></div>
                                    </motion.div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Audio

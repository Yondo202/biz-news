import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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


export class bunners extends Component {
    render() {
        console.log(this.props.bunner2, 'bunner yma')
        const bunner2 = this.props.bunner2
        return (
            <Container fluid style={{ width: '70%' }} className="bunnerPar">
                    <Row>
                        <div className="golMenu">
                            <Col md={12} >
                            <Link href={bunner2.url}>
                                <a target="_blank">
                        <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                              <div className="TopBunner">
                                        <div className="text">
                                                <h5>
                                                    {bunner2.title}
                                            </h5>
                                        
                                        </div>
                                        <div className="image">
                                            <img src={`${bunner2.image.url}`} alt="myImage" />
                                        </div>
                                        <div className="ghost">
                                        </div>
                                    </div>
                                 </motion.div>

                                   
                                </a>
                            </Link>

                                
                            </Col>
                        </div>
                    </Row>

            </Container>
        )
    }
}

export default bunners

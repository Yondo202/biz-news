import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
  exit: {
    scale: 0.7,
    opacity: 0.5,
    transition: { duration: 0.9, ease: easing },
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.9, ease: easing },
  },
};

export class bunners extends Component {
  render() {
    console.log(this.props.bunner2, "bunner yma");
    const bunner2 = this.props.bunner2;
    return (
      <Container fluid style={{ width: "70%" }} className="bunnerPar">
        <div className="contPar">
          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={textVariants}
          >
            <div className="TopBunner12">
              <Link href={bunner2.url}>
                <a target="_blank">
                  <div className="image">
                    <img src={`${bunner2.image.url}`} alt="myImage" />
                  </div>
                </a>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={textVariants}
          >
            <div className="TopBunner123">
              <Link href={bunner2.url}>
                <a target="_blank">
                  <div className="image">
                    <img src={require('../image/bunn1.jpg')} alt="myImage" />
                  </div>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* <Row style={{marginTop: '30px', marginBottom:'30px'}}>
                        <Col md={5} >
                            <Link href={bunner2.url}>
                                <a target="_blank">
                                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                    <div className="TopBunner123">
                                        <div className="image">
                                            <img src={`${bunner2.image.url}`} alt="myImage" />
                                        </div>
                                    </div>
                                 </motion.div>
                                </a>
                            </Link>
                        </Col>
                        
                        <Col md={5} >
                            <Link href={bunner2.url}>
                                <a target="_blank">
                                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                    <div className="TopBunner123">
                                        <div className="image">
                                            <img src={`${bunner2.image.url}`} alt="myImage" />
                                        </div>
                                    </div>
                                 </motion.div>
                                </a>
                            </Link>
                        </Col>
                    </Row> */}
      </Container>
    );
  }
}

export default bunners;

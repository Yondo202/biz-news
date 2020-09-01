import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
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

export class indexNews extends Component {
    render() {
        const Data = this.props.allPost
        return (
            <Container className="betweenNewsPar">
                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                    <Row style={{ marginTop: 30 }}>

                        {Data.map((el, i) => {
                            return (
                                <Col key={i} md={4}>
                                    <div className="TopSmall">
                                        <img src={`http://localhost:1337${el.photos[0].url}`} />
                                        <div className="background"></div>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Business</span>
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
                                </Col>
                            )
                        })}





                    </Row>
                </motion.div>
            </Container>
        )
    }
}

export default indexNews





















// import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import { BsFillClockFill, BsBoxArrowInLeft } from 'react-icons/bs'
// import Link from 'next/link'
// import SearchInp from '../Home/search'
// import { motion } from 'framer-motion'


// let easing = [0.5, 0.9, 0.16, 0.95];
// const textVariants = {
//     exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
//     enter: {
//         y: 0,
//         opacity: 1,
//         transition: { delay: 0.2, duration: 0.9, ease: easing }
//     }
// };

// export class indexNews extends Component {

//     render() {
//         console.log('asdada', this.props.allPost)
//         const Data = this.props.allPost
//         return (
//             <div className="allNewsPAr">
//                 <div style={{ height: 70, backgroundColor: 'rgba(0, 0,0, 0.8)', marginBottom: 60 }}></div>
//                 <Container className="containers" fluid style={{ width: '85%' }}>
//                     <Row style={{ marginBottom: 40 }}>
//                         <Col>
//                             <SearchInp />
//                         </Col>
//                     </Row>
//                     <motion.div initial="exit" animate="enter" exit="exit">
//                         <Row>
//                             <motion.div variants={textVariants}>
//                                 {Data.map((el, i) => {
//                                     return (
//                                         <Col key={i} md={3}>
//                                             <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
//                                                 <div className="conPar">
//                                                     <div className="img">
//                                                         <img src={`http://localhost:1337${el.photos[0].url}`} />
//                                                     </div>
//                                                     <h6>{el.title} </h6>
//                                                     <button type="button">Дэлгэрэнгүй...<BsBoxArrowInLeft /></button>
//                                                 </div>
//                                             </Link>
//                                         </Col>
//                                     )
//                                 })}
//                             </motion.div>

//                         </Row>
//                     </motion.div>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default indexNews


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
        const allVideo = this.props.allVideo
        return (
            <Container className="betweenNewsPar">
                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                    <Row style={{ marginTop: 30 }}>


                        {allVideo.map((el, i) => {
                            return (
                                <Col md={4} key={i}>
                                    <div className="TopSmall">
                                        <img src={`${el.image.url}`} />
                                        <div className="background"></div>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Video</span>
                                            </div>
                                            <div className="Title">
                                                <Link href="/videos/[slug]" as={`/videos/${el.slug}`} >
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
        )
    }
}

export default indexNews


































// import React, { Component } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
// import Link from 'next/link'
// import { BsBoxArrowInLeft } from 'react-icons/bs'
// import { FaRegPlayCircle } from 'react-icons/fa'
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

// export class HomeVideo extends Component {


//     render() {
//         // console.log(VideoData.Url2, 'hahah')
//         const Data = this.props.allVideo
//         return (
//             <div className="allvideoPAr">
//                 <div style={{ height: 70, backgroundColor: 'rgba(0, 0,0, 0.8)', marginBottom: 60 }}></div>
//                 <Container className="containers" fluid style={{ width: '85%' }}>
//                     <motion.div initial="exit" animate="enter" exit="exit">

//                         <motion.div variants={textVariants}>
//                             <Row>
//                                 {Data.map((el, i) => {
//                                     return (
//                                         <Col key={i} md={3}>
//                                             <div className="conPar">
//                                                 <div className="img">
//                                                     <div><FaRegPlayCircle></FaRegPlayCircle></div>
//                                                     <img src={`${el.image.url}`} />
//                                                 </div>
//                                                 <h6>{el.title} </h6>
//                                                 <Link href="/videos/[id]" as={`/videos/${el.slug}`} >
//                                                     <button type="button">Дэлгэрэнгүй...<BsBoxArrowInLeft /></button>
//                                                 </Link>
//                                             </div>
//                                         </Col>
//                                     )
//                                 })}
//                             </Row>
//                         </motion.div>

//                     </motion.div>

//                 </Container>
//             </div>
//         )
//     }
// }

// export default HomeVideo



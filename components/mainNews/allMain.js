import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};


function allMain(props) {
    console.log(props.small, ' zangilga data')
    const allData = props.small
    return (
        <Col md={4}>
            <div className="dailyTitle">
                <h1 >Daily News</h1>
                <div className="linePAr">
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>

            </div>
            <div className="ScrollPar">
                {allData.map((el, i) => {
                    return (
                        <motion.div initial="exit" animate="enter" exit="exit">
                            <motion.div variants={textVariants} >
                                <div key={i} className="contentPar" >
                                    <span className="date">{el.date}</span>
                                    <div className="flexPar">
                                        <div className="flex1">
                                            {/* <img src={el.image.url} /> */}
                                            <img src={`${el.image.url}`} />
                                            <div className="flex1Text">
                                                <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                    <h6 >{el.title}</h6>
                                                </Link>
                                                <span>Biz-News</span>
                                            </div>
                                        </div>
                                        {/* <div className="flex2">
                                            <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                            </Link>
                                            <button style={{ backgroundColor: "#C42F63" }}>Хуваалцах</button>
                                        </div> */}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    )
                })}
            </div>
        </Col>
    )
}

export default allMain

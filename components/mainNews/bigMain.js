import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaEye, FaComments } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookShareCount,
} from 'react-share';

import {
    FacebookIcon,
    EmailIcon,
    TwitterIcon,
} from 'react-share';


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

function bigMain(props) {

    console.log(props.big, 'hiahia big big big')
    console.log(props.small, 'small hehe')

    const slugData = props.big



    return (

        <Col md={8}>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div variants={textVariants}>
                    <div className="mainCon">
                        <div className="smMenu">
                            <div className="flex1">
                                <span><FaFacebook />Biz-news</span>
                                <span><BsFillClockFill />{slugData.date}</span>
                            </div>
                            <div className="flex2">
                                <span> <FaEye /> {'( 46 )'}</span>
                                <span><FaComments /> {'( 86 )'}</span>
                            </div>
                        </div>

                        <div className="title">
                            <h3>{slugData.title}</h3>
                            <img src={`${slugData.image.url}`} />
                            <p>{slugData.desc}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <FacebookShareButton url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
                <FacebookIcon size={30} />
                <FacebookShareCount url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`}>
                    {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
                </FacebookShareCount>
            </FacebookShareButton>
        </Col>
    )
}

export default bigMain

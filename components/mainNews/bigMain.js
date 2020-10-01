import React, { Component } from 'react'
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
import { Parser } from 'html-to-react';
import Link from 'next/link'

const huwirgagch = new Parser();

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};
const textVariants2 = {
    exit: { scale: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        scale: 0,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

export class bigMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            className: "shareBtnPar2",
            color: 'white',
            className2: 'ScrollHead2'
        }
    }



    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 100) {
            this.setState({ className: "shareBtnPar" });
            this.setState({ className2: "ScrollHead" });

        } else {
            this.setState({ className: "shareBtnPar2" });
            this.setState({ className2: "ScrollHead2" });

        }
        console.log('lalalall', window.pageYOffset)
    }

    render() {
        console.log(this.props.big, 'hiahia big big big')
        console.log(this.props.small, 'small hehe')
        const slugData = this.props.big
        return (
            <Col md={8}>
                <div className={this.state.className2}>
                    <Link href="/">
                        <img src={require('../image/bizlogo1.png')}></img>
                    </Link>
                    <div className="Line"></div>
                    <div className="TitlePar">
                        "{slugData.title}"
                    </div>
                </div>
                <motion.div initial="exit" animate="enter" exit="exit">
                    <motion.div variants={textVariants}>
                        <div className="mainCon">
                            <div className="title">
                                <h2>"{slugData.title}"</h2>
                                <div className={this.state.className}>
                                    <div className="ProfileCon">
                                        <img src={require('../image/103804281_10220809760368036_8805337625036517462_n.jpg')}></img>
                                        <div className="textPar">
                                            <span className="Name">Д.Цацрал</span>
                                            <div className="other">
                                                <span className="filter">{slugData.filter}</span>
                                                <span className="filter2">Ярилцлага</span>
                                                <span className="date">{slugData.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonsPAr">
                                        <FacebookShareButton  imageURL={slugData.image.url} title="hahaha" media={slugData.image.url} resetButtonStyle={true} url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
                                            <FacebookIcon />
                                            <FacebookShareCount url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`}>
                                                {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
                                            </FacebookShareCount>
                                        </FacebookShareButton>
                                        <TwitterShareButton   media={slugData.image.url} resetButtonStyle={true} url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
                                            <TwitterIcon   ></TwitterIcon>
                                        </TwitterShareButton>
                                    </div>
                                </div>
                                {/* <div className="linePAr">
                                    <div className="line"></div>
                                    <div className="line2"></div>
                                </div> */}
                                <img src={`${slugData.image.url}`} />
                                <div className="content sun-editor-editable sun-editor">{huwirgagch.parse(slugData.desc)}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Col>
        )
    }
}

export default bigMain

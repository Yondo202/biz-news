import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import React, { Component, useEffect, useState } from 'react'
export const config = { amp: 'hybrid' }
import {useAmp} from 'next/amp'


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
    const [className, setClassName] = useState('headPar');
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })
    const handleScroll = () => {
        if (window.pageYOffset > 1) {
            setClassName('scrollDown');
        }
        // console.log('lalalall', window.pageYOffset)
    }

    const router = useRouter()
    const myRoute = router.query.slug

    const myAmp = useAmp();
    console.log(myAmp, 'this is my Amp ........')
    console.log(config , 'my Config')
    return (
        <Col md={4} style={{ position: "relative" }}>
            <div className="otherNewsParent">
                <div className="dailyTitle">
                    <h1 >Мэдээнүүд</h1>
                    <div className="linePAr">
                        <div className="line"></div>
                        <div className="line2"></div>
                    </div>

                </div>
                <div className="ScrollPar">
                    {props.small.map((el, i) => {
                        return (
                            <motion.div initial="exit" animate="enter" exit="exit">
                                <motion.div variants={textVariants} >
                                    {myRoute == el.slug ? <div style={{display:'none'}} key={i} className="contentPar" >
                                        <div  className="flexPar">
                                            <div className="flex1">
                                                {/* <img src={el.image.url} /> */}
                                                <img src={`${el.image.url}`} alt="myImageHere" />
                                                <div className="flex1Text">
                                                    <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                        <h6 >{el.title}</h6>
                                                    </Link>
                                                    <span className="date">{el.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : <div key={i} className="contentPar" >
                                            <div className="flexPar">
                                                <div className="flex1">
                                                    {/* <img src={el.image.url} /> */}
                                                    <img src={`${el.image.url}`} alt="myImageHere" />
                                                    <div className="flex1Text">
                                                        <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                            <h6 >{el.title}</h6>
                                                        </Link>
                                                        <span className="date">{el.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}

                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="bunner">
                    <section className="homeVide"
                        style={{
                            position: `relative`, height: `100%`, height: `-moz-available`, height: `-webkit-fill-available`, height: `fill-available`,
                            minHeight: `100%`,
                            width: `100%`,
                            zIndex: `1`,
                            overflow: `hidden`,
                        }}
                    >
                        <div className="background">
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: `absolute`,
                                left: `50%`,
                                top: `50%`,
                                transform: `translate(-50%,-50%)`,
                                width: `auto`,
                                height: `auto`,
                                minHeight: `100%`,
                                minWidth: `100%`,
                            }}
                        >
                            {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}
                            {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
                        </video>
                        <img src={props.small[0].image.url} alt="myImageHere" />

                    </section>
                    <div className="contents">
                        <span>Banner Area Banner Area
                        250 x 300
                                    </span>
                    </div>
                </div>
                <div className="bunner">
                    <section className="homeVide"
                        style={{
                            position: `relative`, height: `100%`, height: `-moz-available`, height: `-webkit-fill-available`, height: `fill-available`,
                            minHeight: `100%`,
                            width: `100%`,
                            zIndex: `1`,
                            overflow: `hidden`,
                        }}
                    >
                        <div className="background">
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: `absolute`,
                                left: `50%`,
                                top: `50%`,
                                transform: `translate(-50%,-50%)`,
                                width: `auto`,
                                height: `auto`,
                                minHeight: `100%`,
                                minWidth: `100%`,
                            }}
                        >
                            {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}
                            {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
                        </video>
                        <img src={props.small[0].image.url} alt="myImageHere" />

                    </section>
                    <div className="contents">
                        <span>Banner Area Banner Area
                        250 x 300
                                    </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default allMain;


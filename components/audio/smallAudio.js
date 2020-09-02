import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GiPlayButton } from 'react-icons/gi'
import { MdPlayCircleOutline } from 'react-icons/md'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AudioPlayer from 'react-h5-audio-player';

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};



function smallAudio(props) {
    
    const MainData = props.big
    console.log(props.all, 'this my all')
    const allNews = props.all
    return (
        <Col md={5} >
            <div className="MainPar" >
                <div className="audioPlay">
                    {/* <img src={`http://localhost:1337${MainData.image.url}`} /> */}
                    <AudioPlayer
                        // autoPlay
                        defaultDuration="Loading"
                        // customIcons={{
                        //     play: sampleIcon
                        //     }} 
                        layout="horizontal-reverse"
                        
                        header={MainData.title}
                        src={`${MainData.audio.url}`}
                        onPlay={e => console.log("onPlay")}
                    />
                </div>
                <div className="videoMenu">
                    {/* <div className="bigTitle">
                    <h2><MdPlayCircleOutline />Audio</h2>
                    <div className="line"></div>
                </div> */}
                    <div className="scroll">

                        {allNews.map((el, i) => {
                            return (
                                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                    <div key={i} className="menuCon">
                                        <div></div>
                                        <GiPlayButton />
                                        <Link href="/audio/[slug]" as={`/audio/${el.slug}`} >
                                            <a activeClassName="navbar__link--active"  >{el.title}</a>
                                        </Link>
                                        <div className="date">{el.date}</div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default smallAudio

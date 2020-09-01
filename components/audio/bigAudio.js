import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};


function bigAudio(props) {
    console.log(props.big, 'this my big')
    const MainData = props.big
    return (
        <Col md={7} >
            <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                {/* <div className="audioPlay">
                    <img src={`http://localhost:1337${MainData.image.url}`} />
                    <AudioPlayer
                        // autoPlay

                        defaultDuration="Loading"
                        // customIcons={{
                        //     play: sampleIcon
                        //     }} 
                        layout="stacked-reverse"
                        header={MainData.title}
                        src={`http://localhost:1337${MainData.audio.url}`}
                        onPlay={e => console.log("onPlay")}
                    />
                </div> */}

                <div className="ImgPAr">
                    <div className="img">
                        <img src={`http://localhost:1337${MainData.image.url}`} />
                        <div className="background"></div>
                    </div>
                    <div className="Contents">
                        <h2>{MainData.title}</h2>
                    </div>
                </div>
            </motion.div>
        </Col>
    )
}

export default bigAudio

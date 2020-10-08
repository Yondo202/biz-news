import React from 'react'
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-bootstrap';
import { GiPlayButton } from 'react-icons/gi'
import { MdPlayCircleOutline } from 'react-icons/md'
import { CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg'
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
    const router = useRouter();
    const myRoute = router.query.slug

    const MainData = props.big
    const allNews = props.all
    return (
        <Col md={5} >
            <div className="MainPar" >
                <div className="audioPlay">
                    <AudioPlayer
                        defaultDuration="Loading"
                        layout="horizontal-reverse"
                        header={MainData.title}
                        src={`${MainData.audio.url}`}
                        onPlay={e => console.log("onPlay")}
                    />
                </div>
                <div className="videoMenu">
                    <div className="scroll">
                        {allNews.map((el, i) => {
                            return (
                                <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                    {myRoute == el.slug ? <div key={i} className="menuCon">
                                        <CgPlayPauseO />
                                        <Link href="/audio/[slug]" as={`/audio/${el.slug}`} >
                                            <a className="listText">{el.title}</a>
                                        </Link>
                                        <div className="date">{el.date}</div>
                                        <img className="gif" src={require('../image/sound.gif')} />
                                    </div> : <div key={i} className="menuCon">
                                            <CgPlayButtonO />
                                            <Link href="/audio/[slug]" as={`/audio/${el.slug}`} >
                                                <a >{el.title}</a>
                                            </Link>
                                            <div className="date">{el.date}</div>
                                            {/* <img className="gif" src={require('../image/sound.gif')} /> */}
                                        </div>}
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

import React from 'react'
import ReactPlayer from 'react-player'
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
    exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

function bigVideo(props) {
    const big = props.big
    return (
        <div className="reactPlayr" >
            <ReactPlayer
                playing={true}
                // fixed-bottom
                className='react-player '
                // url={`${big.video[0].url}`}
                url={`${big.video}`}
                // url="https://www.facebook.com/100213924895572/videos/1838876309584888/"
                // url='/videos/video3.mp4'
                width='100%'
                height='100%'
                controls={true}
            />
        </div>


    )
}

export default bigVideo

import React from 'react'
import { GiPlayButton } from 'react-icons/gi'
import Link from 'next/link'
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};



function allVideo(props) {
    const allData = props.allData
    console.log(allData, 'my all data')
    return (
        <div className="videoMenu">
            <div className="bigTitle">
                <h2>Video News</h2>
                <div className="line"></div>
            </div>
            <div className="scroll">


                {allData.map((el, i) => {
                    return (
                        <motion.div initial="exit" animate="enter" exit="exit">

                            <motion.div variants={textVariants}>
                                <div key={i} className="menuCon">
                                    <GiPlayButton />
                                    <Link href="/videos/[slug]" as={`/videos/${el.slug}`}>
                                        <a activeClassName="navbar__link--active" >{el.title}</a>
                                    </Link>
                                    <div className="date">{el.date}</div>
                                </div>
                            </motion.div>

                        </motion.div>

                    )
                })}
                {/* <a activeClassName="navbar__link--active" className={this.state.myClass} tabIndex={i} onClick={this.clickHandler} >{el.title}</a> */}

                {/* <div className="menuCon">
                                        <GiPlayButton /><span> News headlines today: July 27, 2020News headlines today: July 27, 2020</span>
                                        <div className="date">July 27, 2020</div>
                                    </div> */}

            </div>
        </div>
    )
}

export default allVideo

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Bunner from './Bunner'

import { GiPlayButton } from 'react-icons/gi'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Accordion, AccordionItem } from 'react-sanfona';
import { RiPlayList2Line, RiPlayList2Fill } from 'react-icons/ri'
import { MdSlowMotionVideo } from 'react-icons/md'



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
    const myData1 = props.allData.filter(e => e.bulan == 'BOOK LOVER').slice(0, 1)
    const myData2 = props.allData.filter(e => e.bulan == 'TREND NEWS').slice(0, 1)
    const titleData = [...myData1, ...myData2]
    console.log(myData1, 'jejejejjee')
    console.log(myData2, 'jejejejjee2')
    console.log(titleData, 'jejejejjee2123123')
    return (
        <div className="videoMenu">
            <Container fluid style={{ width: '97%' }}>
                <Row>
                    <Col md={8}>
                        <div className="bigTitle">
                            <h3>Video News</h3>
                            {/* <div className="line"></div> */}
                            <div className="line"><div className="line2"></div></div>

                        </div>
                        <Accordion  >
                            {titleData.map((item, i) => {
                                return (
                                    <AccordionItem  key={i} title={`⏯️ ${item.bulan}`} expanded={item === 1}>
                                        {allData.map((items, i) => {
                                            if (item.bulan === items.bulan) {
                                                return (
                                                    <div className="contentPar" key={i}>
                                                        <div>
                                                            <img src={items.image.url}  alt="myImage" />
                                                        </div>
                                                        <Link href="/videos/[slug]" as={`/videos/${items.slug}`}>
                                                              <span className="contents"> {items.title} </span>
                                                              
                                                        </Link>
                                                    </div>

                                                )
                                            }
                                        })}
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <Bunner allData={allData} />
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default allVideo

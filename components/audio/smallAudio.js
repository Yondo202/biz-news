import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GiPlayButton } from 'react-icons/gi'
import { MdPlayCircleOutline } from 'react-icons/md'
import Link from 'next/link'

function smallAudio(props) {
    console.log(props.all, 'this my all')
    const allNews = props.all
    return (
        <Col md={4}>
            <div className="videoMenu">
                <div className="bigTitle">
                    <h2><MdPlayCircleOutline />Audio</h2>
                    <div className="line"></div>
                </div>
                <div className="scroll">

                    {allNews.map((el, i) => {
                        return (
                            <div key={i} className="menuCon">
                                <div></div>
                                <GiPlayButton />
                                <Link href="/audio/[id]" as={`/audio/${el.id}`} >
                                    <a activeClassName="navbar__link--active"  >{el.title}</a>
                                </Link>
                                <div className="date">{el.date}</div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </Col>
    )
}

export default smallAudio

import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { GiPlayButton } from 'react-icons/gi'
import { MdPlayCircleOutline } from 'react-icons/md'

import AudioPlayer from 'react-h5-audio-player';
import { Container, Row, Col } from 'react-bootstrap';


export class Audio extends Component {
    render() {
        return (
            <div  className="audioPar">
                <Container fluid>
                    <Row style={{ paddingTop: 10 }}>
                        <Col md={4}>
                            <div className="videoMenu">
                                <div className="bigTitle">
                                    <h2><MdPlayCircleOutline />Audio</h2>
                                    <div className="line"></div>
                                </div>
                                <div className="scroll">
                                    <div className="menuCon">
                                        <div></div>
                                        <GiPlayButton /><a activeClassName="navbar__link--active"  >
                                            Бүтээн байгуулалтын ажлын тухай бодит мэдээлэл дутаж </a>
                                        <div className="date">2019.03.05</div>
                                    </div>
                                    <div className="menuCon">
                                        <div></div>
                                        <GiPlayButton /><a activeClassName="navbar__link--active"  >hahahahah</a>
                                        <div className="date">2019.03.05</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="audioPlay">
                                <img src={require('../image/news.jpg')} />
                                <AudioPlayer
                                    // autoPlay

                                    defaultDuration="Loading" 
                                    // customIcons={{
                                    //     play: sampleIcon
                                    //     }} 
                                    layout="stacked-reverse" 
                                    header='
                                    Бүтээн байгуулалтын ажлын тухай бодит мэдээлэл дутаж '
                                    src="/audio/audio1.mp3"
                                    onPlay={e => console.log("onPlay")}
                                />
                            </div>

                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}

export default Audio

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';

function bigAudio(props) {
    console.log(props.big, 'this my big')
    const MainData = props.big
    return (
        <Col md={8}>
            <div className="audioPlay">
                <img src={`http://66.181.166.84:1337${MainData.image.url}`} />
                <AudioPlayer
                    // autoPlay

                    defaultDuration="Loading"
                    // customIcons={{
                    //     play: sampleIcon
                    //     }} 
                    layout="stacked-reverse"
                    header={MainData.title}
                    src={`http://66.181.166.84:1337${MainData.audio.url}`}
                    onPlay={e => console.log("onPlay")}
                />
            </div>

        </Col>
    )
}

export default bigAudio

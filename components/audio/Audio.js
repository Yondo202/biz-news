import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';


import AudioPlayer from 'react-h5-audio-player';
import { Container, Row, Col } from 'react-bootstrap';
import BigAudio from './bigAudio'
import AllAudio from './smallAudio'

export class Audio extends Component {
    render() {
        console.log(this.props, 'dadada')
        const big = this.props.big
        const all = this.props.all
        // console.log('object', big, )
        // console.log('object2', all)
        return (
            <div style={{  backgroundColor: '#f2f2f2 ' }} className="audioPar">
                <div style={{height:70, backgroundColor:'rgba(0, 0,0, 0.9)', marginBottom:60}}></div>
                {/* <ReactAudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    autoPlay
                    controls
                /> */}
                <Container fluid>
                    <Row >
                        <BigAudio big={big} />
                        <AllAudio all={all} />
                    </Row>

                </Container>

            </div>
        )
    }
}

export default Audio

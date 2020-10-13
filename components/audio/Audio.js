import React, { Component } from 'react'
// import AudioPlayer from 'react-h5-audio-player';
import { Container, Row, Col } from 'react-bootstrap';
import BigAudio from './bigAudio'
import AllAudio from './smallAudio'

export class Audio extends Component {
    render() {
        // console.log(this.props, 'dadada')
        const big = this.props.big
        const all = this.props.all
        // console.log('object', big, )
        // console.log('object2', all)
        return (
            <div style={{  backgroundColor: '#f2f2f2' }} className="audioPar">
                <Container fluid style={{width:'100%'}}>
                    <Row >
                        <BigAudio big={big} />
                        <AllAudio all={all} big={big}  />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Audio

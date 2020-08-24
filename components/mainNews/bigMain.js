import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaEye, FaComments } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'


function bigMain(props) {

    console.log(props.big, 'hiahia')
    console.log(props.small, 'small hehe')

    const slugData = props.big



    return (
        <Col md={7}>
            <div className="mainCon">
                <div className="smMenu">
                    <div className="flex1">
                        <span><FaFacebook />Biz-news</span>
                        <span><BsFillClockFill />{slugData.date}</span>
                    </div>
                    <div className="flex2">
                        <span> <FaEye /> {'( 46 )'}</span>
                        <span><FaComments /> {'( 86 )'}</span>
                    </div>
                </div>

                <div className="title">
                    <h3>{slugData.title}</h3>
                    <img src={`http://localhost:1337${slugData.photos[0].url}`} />
                    <p>{slugData.desc}</p>
                </div>
            </div>
        </Col>
    )
}

export default bigMain

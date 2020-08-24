import React, { Component } from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosPlayCircle } from 'react-icons/io'
import Link from 'next/link'

export class newsCon extends Component {
    render() {
        var settings = {
            autoplay: false,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            waitForAnimate: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        // console.log(this.props.AuidoNews[1].id, 'lalalla')

        const audioNews = this.props.AuidoNews

        return (
            <div style={{ position: 'relative' }}>
                <div className="newsCon" >

                </div>
                <Container fluid className="newsConpar">
                    <div >
                        <h1>Audio News</h1>
                        <Slider {...settings}>
                            {audioNews.map((el, i) => {
                                return (
                                    <div key={i} className="conPar" >
                                        <div className="myImg" >
                                            <img src={`http://localhost:1337${el.image.url}`} />
                                            <Link href="/audio/[id]" as={`/audio/${el.id}`}>
                                                <IoIosPlayCircle />
                                            </Link>
                                        </div>
                                        <div className="textCon">
                                            <p className="title">{el.title} </p>
                                            <p className="desc">{el.desc}</p>
                                            <a className="readmore">Continue play</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </Container>
            </div>

        )
    }
}

export default newsCon

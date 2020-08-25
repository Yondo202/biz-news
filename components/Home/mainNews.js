import React, { Component } from 'react'
import Slider from "react-slick";
import { Container, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import BackNews from '../mainNews/mainNews'
import Link from 'next/link';


export class mainNews extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        }
    }


    render() {

        var settings = {
            autoplay: true,
            autoplaySpeed: 4000,
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
                        autoPlay: true,
                        autoplaySpeed: 4000,
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        autoPlay: true,
                        autoplaySpeed: 4000,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        autoPlay: true,
                        autoplaySpeed: 4000,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        
        const newsData = this.props.myProp2
        console.log('object', newsData[0].photos[0].url)

        return (
            <div className="mainNewsPar" style={{ padding: "100px 0px", marginTop: 80, backgroundImage: `url(${require('../image/back1.jpg')})` }}>
                <Container fluid >
                    <div style={{ textAlign: 'center' }}>
                        <div className="flex">
                            <h1>Main News</h1>
                            <div className="line"></div>
                        </div>
                        <Slider {...settings}>

                            {newsData.map((el, i) => {
                                return (
                                    <div key={i} className="conPar" >
                                        <div className="myImg" >
                                            <img src={`http://66.181.166.84:1337${el.photos[0].url}`} />
                                        </div>
                                        <div className="textCon">
                                            <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
                                                <p  className="title">{el.title}</p>
                                            </Link>
                                            <p className="desc">{el.desc}</p>
                                            <span className="Date">{el.date}</span>
                                            <div className="icons">
                                                <GrFacebookOption />
                                                <AiOutlineTwitter />
                                                <AiOutlineGooglePlus />
                                                <AiFillInstagram />
                                                <TiSocialYoutubeCircular />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* <div className="conPar" >
                                <div className="myImg" >
                                    <img src={require('../image/inf2.png')} />
                                </div>
                                <div className="textCon">
                                    <p className="title">The greatest Royal wedding dress ever. </p>
                                    <p className="desc">have suffered alteration in somete in some form, by injected humour </p>
                                    <span className="Date">1996/02/03</span>
                                    <div className="icons">
                                        <GrFacebookOption />
                                        <AiOutlineTwitter />
                                        <AiOutlineGooglePlus />
                                        <AiFillInstagram />
                                        <TiSocialYoutubeCircular />
                                    </div>
                                </div>
                            </div> */}

                        </Slider>
                    </div>
                </Container>
                

            </div>
        )
    }
}

export default mainNews

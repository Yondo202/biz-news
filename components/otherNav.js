import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import Slider from "react-slick";
import Link from 'next/link';


export class otherNav extends Component {
    render() {
        const AllNews = this.props.AllNews

        var settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            waitForAnimate: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        autoPlay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        autoPlay: true,
                        autoplaySpeed: 3000,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
            ]
        };
        const bunner1 = this.props.bunner1
        console.log(bunner1, 'bunner1')
        // console.log(this.props.Logo.logo.url, 'datalogo')
        return (
            <div className="OtherHeader">
                <div className="TopHead">
                    <Container style={{ height: '100%' }}>
                        <div className="flexHead">
                            <div className="TrendPar">
                                <div className="trend">
                                    <span>Trending News</span>
                                </div>
                                <div className="trendCont">
                                    <Slider {...settings}>
                                        {AllNews.map((el, i) => {
                                            return (
                                                <Link key={i} href='/posts/[slug]' as={`/posts/${el.slug}`}>
                                                    <span key={i} >{el.title}</span>
                                                </Link>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                            <div className="icons">
                                <div className="date">
                                    <span>Thursday, 31 June</span>
                                </div>
                                <div className="icons">
                                    <GrFacebookOption />
                                    <AiOutlineTwitter />
                                    <AiOutlineGooglePlus />
                                    <AiFillInstagram />
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>

                <Container>
                    <Row>
                        <div className="golMenu">
                            <Col md={4} sm={12} xs={12}>
                                <div className="logo">
                                    {/* <img src={`${this.props.Logo.logo.url}`} /> */}
                                    <img src={require('../components/image/bizlogo1.png')} />
                                </div>
                            </Col>
                            <Col md={8} sm={12} xs={12}>
                                <Slider {...settings}>
                                    {bunner1.map((el, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="TopBunner">
                                                    <div className="text">
                                                        <a target="_blank">
                                                            <h5>
                                                               {el.title}
                                                {/* {bunner1.title} */}
                                                            </h5>
                                                        </a>
                                                    </div>
                                                    <div className="image">
                                                        <img src={`${el.image.url}`} />
                                                        <div className="title">
                                                            {el.nemelt}
                                            {/* <h5>{bunner1.nemelt}</h5> */}
                                                        </div>
                                                    </div>
                                                    <div className="ghost">
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default otherNav

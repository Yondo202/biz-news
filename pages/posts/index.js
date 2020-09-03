import React, { Component } from 'react'
import Head from 'next/head'

import Layout from '../../components/layout2'
import MainNews from '../../components/mainNews/mainNews'
import Index from '../../components/mainNews/indexNews'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import Slider from "react-slick";
import Link from 'next/link';
import axios from 'axios'



export class news extends Component {
    render() {
        // console.log(this.props.test)
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
        return (
            <>
                <Head>
                    <title>Biz-Insider</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>


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
                                                {this.props.allPost.map((el, i) => {
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
                                            <img src={require('../../components/image/bizlogo1.png')} />
                                        </div>
                                    </Col>
                                    <Col md={8} sm={12} xs={12}>
                                        <Slider {...settings}>
                                            {this.props.bunner1.map((el, i) => {
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

                <Layout>
                    <Index allPost={this.props.allPost} />
                </Layout>
            </>

        )
    }
}

export default news


export async function getServerSideProps(){
    const MainNews = await axios('https://biz-admin.herokuapp.com/posts');
    const bunner1 = await axios(`https://biz-admin.herokuapp.com/bunner-1-s`);
    //  console.log(ctx.params.id,'heehehe')
     // let param = ctx.params.id
     return {props: {
         allPost: MainNews.data,
         bunner1:bunner1.data
     }}
 }
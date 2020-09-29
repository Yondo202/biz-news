import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HomeVideo from '../../components/Video/indexVideo'
import Head from 'next/head'
import axios from 'axios'
import OtherNav from '../../components/otherNav'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import Slider from "react-slick";
import Link from 'next/link';


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
export class videoNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime : new Date().toLocaleString(),
        }
    }

    render() {
        const Dates = this.state.curTime.slice(0, 9)
        return (
            <div>

                <Head>
                    <title>BIZI.mn</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>

                {/* <OtherNav AllNews={this.props.MainNews} bunner1={this.props.bunner1} /> */}

                <>
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
                                                {this.props.allVideo.map((el, i) => {
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
                                            <span style={{letterSpacing:2}}>{Dates}</span>
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


                        <div className="golMenu22">
                            <div className="logo">
                                {/* <img src={`${this.props.Logo.logo.url}`} /> */}
                                <Link href="/">
                                    <img src={require('../../components/image/bizlogo1.png')} />
                                </Link>
                            </div>
                            <div className="SliderPAr">
                                <Slider {...settings}>
                                    {this.props.bunner1.map((el, i) => {
                                        return (
                                            <div key={i}>
                                                <a href={el.url} target="_blank">
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
                                                </a>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>


                    </div>

                    <Layout allVideo={this.props.allVideo}>
                        <HomeVideo allVideo={this.props.allVideo} />
                    </Layout>
                </>

            </div>
        )
    }
}

export default videoNews


export async function getServerSideProps() {
    const MainNews = await axios('https://biz-admin.herokuapp.com/videos');
    // const AllNews = await axios(`https://biz-admin.herokuapp.com/posts`);
    const bunner1 = await axios(`https://biz-admin.herokuapp.com/bunner-1-s`);
    //  console.log(ctx.params.id,'heehehe')
    // let param = ctx.params.id
    return {
        props: {
            allVideo: MainNews.data,
            bunner1: bunner1.data
        }
    }
}
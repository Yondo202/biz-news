import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import MainNews from '../../components/mainNews/mainNews'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import Slider from "react-slick";
import Link from 'next/link';
import axios from 'axios'
import ReactGa from 'react-ga';
import { useEffect } from 'react'
import Conversation from '../../components/mainNews/conversation'


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
export class news extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime: new Date().toLocaleString(),
        }
    }

    componentDidMount() {
        ReactGa.initialize('UA-180671141-1')
        ReactGa.pageview(window.location.pathname + window.location.search)
    }

    render() {
        const Dates = new Date()
        const date = Dates.getFullYear() + '.' + (Dates.getMonth()+1) + '.' + Dates.getDate();

        return (
            <>
                <Head>
                    <title>BIZI.mn</title>
                    <meta name="description" content="Завгүй хүмүүст зориулав. Бизнесийн болон бусад мэдээллийг нэг дороос." />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="2645260245750776" />
                    <meta property="og:url" content={`https://biznet-news.vercel.app/posts`} />
                    <meta property="og:site_name" content="BIZI.mn" />
                    <link rel="icon" href="/business.png" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
                </Head>


                <div className="OtherHeader">
                    <div className="TopHead">
                        <Container fluid style={{ height: '100%', width: '70%' }}>
                            <div className="flexHead">
                                <div className="TrendPar">
                                    <div className="trend">
                                        <span>Товч мэдээ</span>
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
                                        <span style={{ letterSpacing: 2 }}>{date}</span>
                                    </div>
                                    <div className="icons">
                                        <Link href='https://www.facebook.com/www.bizi.mn' target="_blank" >
                                                <GrFacebookOption />
                                        </Link>
                                        <AiOutlineTwitter />
                                        <AiOutlineGooglePlus />
                                        <AiFillInstagram />
                                    </div>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <Container fluid style={{ width: '70%' }}>
                        <div className="golMenu22">
                            <div className="logo">
                                {/* <img src={`${this.props.Logo.logo.url}`} /> */}
                                <Link href="/">
                                    <img className="indexNews2" src={require('../../components/image/news.png')} alt="myImage" />
                                </Link>
                            </div>
                            <div className="SliderPAr">
                                <Slider {...settings}>
                                    {this.props.bunner1.map((el, i) => {
                                        return (
                                            <div key={i}>
                                                <Link href={el.url} >
                                                    <a target="_blank">
                                                     <div className="TopBunner">
                                                        <div className="image">
                                                            <img src={`${el.image.url}`} alt="myBunner Image" />
                                                        </div>
                                                    </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </Container>

                </div>

                <Layout AllNews={this.props.allPost}>
                    <Conversation allPost={this.props.allPost} />
                </Layout>
            </>

        )
    }
}
export default news

export async function getServerSideProps() {
    const MainNews = await axios('http://3.15.205.212:1337/posts');
    const bunner1 = await axios(`http://3.15.205.212:1337/bunner-1-s`);
    //  console.log(ctx.params.id,'heehehe')
    // let param = ctx.params.id
    return {
        props: {
            allPost: MainNews.data,
            bunner1: bunner1.data
        },
        revalidate: 1
    }
}



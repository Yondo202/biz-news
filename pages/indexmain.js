import Head from 'next/head'
import Layout from '../components/Layout'
import HomePar from '../components/home'
import axios from 'axios'
import OtherNav from '../components/otherNav'
import { Container, Row, Col } from 'react-bootstrap'
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import Slider from "react-slick";
import Link from 'next/link';
import ReactGa from 'react-ga';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// const Dates = new Date().toLocaleString()
const Dates = new Date()
const date = Dates.getFullYear() + '.' + (Dates.getMonth()+1) + '.' + Dates.getDate();

var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
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
                dots: false,
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

export default function Home(props) {

    useEffect(() => {
        ReactGa.initialize('UA-180671141-1')
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    const router = useRouter()
    const myRoute = router.query.slug

    console.log(props.Khansh, ' this is my khansh')
    return (
        <div>
            <Head>
                <title>BIZI.mn</title>
                <meta name="description" content="Завгүй хүмүүст зориулав. Бизнесийн болон бусад мэдээллийг нэг дороос." />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="2645260245750776" />
                <meta property="og:url" content={`https://biznet-news.vercel.app`} />
                <meta property="og:site_name" content="BIZI.mn" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
               

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        

                <link rel="stylesheet" href="dist/shareSelectedText.min.css"/>
            </Head>
            <>
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
                                            {props.AllNews.map((el, i) => {
                                                return (
                                                    <Link key={i} href='/posts/[slug]' as={`/posts/${el.slug}`}>
                                                        <span key={i} >{el.title}</span>
                                                    </Link>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                                <div>
                                    hahaha
                                    <h1>dadada</h1>
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
                                    <img className="indexNews" src={require('../components/image/logo.png')} alt="myLogo" />
                                </Link>
                            </div>
                            <div className="SliderPAr">
                                <Slider {...settings}>
                                    {props.bunner1.map((el, i) => {
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
                    {/* <iframe
                        style="width:180px;font-size:11px;height:210px;border: none;overflow:hidden;margin:0;"
                        src="//monxansh.appspot.com/xansh.html?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW"></iframe> */}
                </div>

                <Layout AllNews={props.AllNews}>
                    {/* <HomePar homeVideo={props.homeVideo} allData={newsData} VideoNews={props.VideoNewsHome} AuidoNews={props.AuidoNews} /> */}
                    <HomePar bunner2={props.bunner2} Vbunner={props.Vbunner} Vbunner2={props.Vbunner2} HomeAudio={props.HomeAudio} AllNews={props.AllNews} HomeVideos={props.HomeVideos} />
                </Layout >
            </>
        </div>
    )
}


export async function getStaticProps() {
    const AllNews = await axios(`https://biz-admin.herokuapp.com/posts`);
    const bunner1 = await axios(`https://biz-admin.herokuapp.com/bunner-1-s`);
    const HomeVideos = await axios(`https://biz-admin.herokuapp.com/videos`);
    const HomeAudio = await axios(`https://biz-admin.herokuapp.com/audio`);
    const bunner2 = await axios(`https://biz-admin.herokuapp.com/Bunner-2`);
    // const Logo = await axios(`https://biz-admin.herokuapp.com/logo`);
    const Vbunner = await axios(`https://biz-admin.herokuapp.com/video-bunner`);
    const Vbunner2 = await axios(`https://biz-admin.herokuapp.com/video-bunner-2`);
    const Khansh = await axios(`https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW`);
    return {
        props: {
            AllNews: AllNews.data,
            HomeVideos: HomeVideos.data,
            bunner1: bunner1.data,
            HomeAudio: HomeAudio.data,
            // TopNews1: TopNews1.data,x
            // TopNews2: TopNews2.data,
            // TopNews3: TopNews3.data,
            // Logo: Logo.data,
            bunner2: bunner2.data,
            Vbunner : Vbunner.data,
            Vbunner2: Vbunner2.data,
            Khansh: Khansh.data
        },
        revalidate: 1
    }
}





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
import { useEffect, useState } from 'react'
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
                initialSlide: 1
            }
        },
    ]
};
// const api ={
//     key:"fabb3807954fd4c008986cfe9a041860",
//     base: "https://home.openweathermap.org/data/2.5/"
// }
const ApiKey = "fabb3807954fd4c008986cfe9a041860"



export default function Home(props) {

    const [weatherData, setweatherData] = useState(null);


   useEffect(() => {
        ReactGa.initialize('UA-180671141-1')
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    const router = useRouter()
    const myRoute = router.query.slug

    console.log(props.Khansh, ' this is my khansh')
    // const JinkenKansh = props.Khansh.map((el, i)=>{
    //     if(el.code == "USD"){
    //         el.push
    //     }
    // })
    console.log(props.TsagAgaar, 'ene bol tsag agaar')

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


                    <meta name="viewport" content="viewport-fit=cover" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Завгүй хүмүүст зориулав. Бизнесийн болон бусад мэдээллийг нэг дороос." />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                    <link rel="icon" href="/bizi.png" />
               

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
                                <div className="ValiutSliderPar">
                                    <Slider {...settings}>

                                        {props.Khansh.map((el, i)=>{
                                            return(
                                            <div className="ValiutParent" key={i}>
                                                <div className="ImgPar">
                                                <img src={require(`../components/image/khansh/${el.code}.png`)} alt="usd" />
                                                {/* <span className="usdText">USD</span> */}
                                                </div>
                                                <span className="cash" style={{letterSpacing:'1px'}}>{el.rate_float}</span>
                                                <span className="cash2">₮</span>
                                            </div>
                                            )
                                        })}
                                        {/* <div className="ValiutParent">
                                                <div className="ImgPar">
                                                <img src={require('../components/image/usd.png')} alt="usd" />
                                                <span className="usdText">USD</span>
                                                </div>
                                                <span className="cash">{props.Khansh.rate_float}</span>
                                                <span className="cash2">₮</span>
                                        </div> */}
                                    </Slider>
                                </div>
                             
                                <div className="WeatherParent">
                                    <img src={require('../components/image/cloudy.png')} />
                                    <span className="odor">9°</span>
                                    <span className="shono">-9°</span>
                                </div>
                                <div className="icons">
                                    <div className="date">
                                        <span style={{ letterSpacing: 1.5 }}>{date}</span>
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
                    <HomePar bunner2={props.bunner2} Vbunner={props.Vbunner} Vbunner2={props.Vbunner2} AllNews={props.AllNews} HomeVideos={props.HomeVideos} />
                    <div>
                        
                    </div>
                </Layout >
            </>
        </div>
    )
}


export async function getServerSideProps() {
    const AllNews = await axios(`http://3.15.205.212:1337/posts`);
    const bunner1 = await axios(`http://3.15.205.212:1337/bunner-1-s`);
    const HomeVideos = await axios(`http://3.15.205.212:1337/videos`);
    const bunner2 = await axios(`http://3.15.205.212:1337/Bunner-2`);
    const Vbunner = await axios(`http://3.15.205.212:1337/video-bunner`);
    const Vbunner2 = await axios(`http://3.15.205.212:1337/video-bunner-2`);
    const Khansh = await axios(`https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW`);
    const TsagAgaar = await axios(`https://api.openweathermap.org/data/2.5/weather?q=taipei,tw&APPID=${ApiKey}`);
    return {
        // revalidate: 1,
        props: {
            AllNews: AllNews.data,
            HomeVideos: HomeVideos.data,
            bunner1: bunner1.data,
            bunner2: bunner2.data,
            Vbunner : Vbunner.data,
            Vbunner2: Vbunner2.data,
            Khansh: Khansh.data,
            TsagAgaar: TsagAgaar.data
        }
        
    }
}





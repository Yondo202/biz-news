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




export default function Home(props) {
  // const newsData = props.MainNews
  // console.log(props.VideoNewsHome, 'lalala')
  return (
    <div>
      <Head>
        <title>Biz-Insider</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
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
                                    {props.bunner1.map((el, i) => {
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
                                                    {/* <div className="ghost">
                                                    </div> */}
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
          {/* <HomePar homeVideo={props.homeVideo} allData={newsData} VideoNews={props.VideoNewsHome} AuidoNews={props.AuidoNews} /> */}
          <HomePar AllNews={props.AllNews} HomeVideos={props.HomeVideos} />
        </Layout >
      </>
    </div>
  )
}


export async function getServerSideProps() {
  const AllNews = await axios(`https://biz-admin.herokuapp.com/posts`);
  const bunner1 = await axios(`https://biz-admin.herokuapp.com/bunner-1-s`);
  const HomeVideos = await axios(`https://biz-admin.herokuapp.com/videos`);
  // const TopNews1 = await axios(`https://biz-admin.herokuapp.com/posts?slug=top-1`);
  // const TopNews2 = await axios(`https://biz-admin.herokuapp.com/posts?slug=top-2`);
  // const TopNews3 = await axios(`https://biz-admin.herokuapp.com/posts?slug=top-3`);
  // const bunner2 = await axios(`https://biz-admin.herokuapp.com/Bunner-2`);
  // const Logo = await axios(`https://biz-admin.herokuapp.com/logo`);
  // const Vbunner = await axios(`http://localhost:1337/video-bunner`);
  return {
    props: {
      AllNews: AllNews.data,
      HomeVideos: HomeVideos.data,
      bunner1: bunner1.data,
      // TopNews1: TopNews1.data,
      // TopNews2: TopNews2.data,
      // TopNews3: TopNews3.data,
      // Logo: Logo.data,
      // bunner2: bunner2.data
    }
  }
}






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
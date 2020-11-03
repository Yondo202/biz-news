import Head from 'next/head'
import Layout from '../../components/Layout'
import axios from 'axios'
import ReactGa from 'react-ga';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Col,Container, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'


export default function Home(props) {

//   console.log(props.big, 'this is my big data')

  useEffect(() => {
    ReactGa.initialize('UA-180671141-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  const router = useRouter()
  const myRoute = router.query.slug
  // console.log(myRoute, ' this is my router shuu')

  return (
    <div>
      <Head>
        <title>BIZI.mn</title>
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2645260245750776" />
        <meta property="og:site_name" content="BIZI" />

        <link rel="icon" href="/business.png" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="dist/shareSelectedText.min.css"/>
      </Head>
      <>
        <Layout AllNews={props.all}>
            <div className="TopestPar">
                <Container fluid style={{width:'50%'}}>
                        <Row>
                            <Col>
                                <div className="RedactsContainer">
                                    <div className="head">
                                    <h1>Редакцын бодлого</h1>
                                        <span>Bizi.mn сайт нь завгүй уншигчдын цагийг хэмнэх, эерэг, сонирхолтой, бизнесийн мэдээ мэдээллийг нэг дороос олгох зорилго бүхий медиа платформ юм. Уншигчдын хэрэгцээ шаардлагад нийцсэн мэдээ мэдээлэл, старт ап бизнесүүдийн танилцуулга, амжилтанд хүрсэн хүмүүсийн энгийн хирнээ гайхалтай түүх, шинэ технологийн гайхамшиг, онцлох зочны бахархам ярилцлагыг Bizi.mn ээс түгээнэ. </span>
                                        <span>Бидний ёс зүйн зарчим</span>
                                    </div>
                                    <div className="titlePar">
                                        <img src={require('../../components/image/check1.png')} />
                                        <h5>Бидний ёс зүйн зарчим</h5>
                                    </div>
                                    <div className="listPar">
                                        <ul>
                                            <li><MdKeyboardArrowRight />Эерэг мэдээллээр цэнэглэнэ</li>
                                            <li><MdKeyboardArrowRight />Бусдаас хуулахыг хатуу хориглоно</li>
                                            <li><MdKeyboardArrowRight />Өөрсдийн бүтээснийг дэлгэрүүлнэ</li>
                                            <li><MdKeyboardArrowRight />Бүтээгчдийг ямагт дэмжинэ</li>
                                            <li><MdKeyboardArrowRight />Шинэ сэтггэлгээг урамшуулна</li>
                                            <li><MdKeyboardArrowRight />Шилдэг технологийг сурталчилна</li>
                                        </ul>
                                    </div>
                                    <div className="titlePar">
                                        <img src={require('../../components/image/check1.png')} />
                                        <h5>Хамтран ажиллах тухайд</h5>
                                    </div>
                                    <div className="TailbarPar">
                                        <span className="tail">
                                          Шинэ санаа, шилдэг бүтээгдэхүүнтэй үргэлж хамтран ажиллаж, хэрэглэгчдэд түгээн, танилцуулах контентийг өөрийн булангуудаар дамжуулан уншигчдад хүргэх болно. Ингэхдээ сайтын агуулгын зарчмаас гажихгүй бөгөөд хоёр талын сэтгэл ханамжийг 100 хувьд хүргэн ажиллах юм. Хамтран ажиллах байгууллагын сонголт, контентийн түгээлт нь хэн нэгний эрх ашгийг хөндөх, нэр хүндэд халдах зэрэг асуудал үүсгэхгүй байна. 
                                        </span>
                                    </div>
                                    <div className="titlePar">
                                        <img src={require('../../components/image/check1.png')} />
                                        <h5>Сошиал медиагийн түгээлт</h5>
                                    </div>
                                    <div className="TailbarPar">
                                        <span className="tail">
                                            Редакцын бэлтгэсэн контент нь Bizi.mn - ий бусад сошиал платформууд дээр байрших болно. Түгээлтэнд хэлбэр агуулгын зөрчил үүсгэхгүй юм. 
                                        </span>
                                    </div>
                                    <div className="titlePar">
                                        <img src={require('../../components/image/check1.png')} />
                                        <h5>Сэтгүүлчийн ёс зүй</h5>
                                    </div>
                                    <div className="TailbarPar">
                                        <span className="tail">
                                          Bizi.mn сайтын сэтгүүлчид, контент бүтээгчид нь зөвхөн үнэн зөв мэдээллийг чиг болгон, эерэг зүйлсийг түгээхийг эрхэмлэн ажиллах бөгөөд, хэвлэл мэдээллийн ёс зүйн нийтлэг зарчмыг мөрдлөг болгон ажиллана. 
                                        </span>
                                    </div>

                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
      </>

    </div>
  )
}


export async function getStaticProps() {
  const allData = await axios(`http://3.15.183.116:1337/posts`);
  return {
    // revalidate: 1,
      props: {
          all: allData.data
      }
  }
}



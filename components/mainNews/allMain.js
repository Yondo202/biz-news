import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'




function allMain(props) {
    console.log(props.small, ' zangilga data')
    const allData = props.small
    return (
        <Col md={5}>
            <div className="dailyTitle">
                <h1 >Daily News</h1>
                <div className="line"></div>
            </div>
            <div className="ScrollPar">
                {allData.map((el, i) => {
                    return (
                        <div key={i} className="contentPar" >
                            <span className="date">20202020</span>
                            <div className="flexPar">
                                <div className="flex1">
                                    {/* <img src={el.image.url} /> */}
                                    <img src={`http://localhost:1337${el.photos[0].url}`} />
                                    <div className="flex1Text">
                                        <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                            <h6 >{el.title}</h6>
                                        </Link>
                                        <span>Biz-News</span>
                                    </div>
                                </div>
                                <div className="flex2">
                                    <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                        <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                    </Link>
                                    <button style={{ backgroundColor: "#C42F63" }}>Хуваалцах</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* <div className="ScrollPar">
                                <div className="contentPar" >
                                    <span className="date">2019.06.05</span>
                                    <div className="flexPar">
                                        <div className="flex1">
                                            <img src={require('../image/news.jpg')} />
                                            <div className="flex1Text">
                                                <h6>Model jocelyn chew’s instagram is the best vacation you’ve ever had.</h6>
                                                <span>Biz-News</span>
                                            </div>
                                        </div>
                                        <div className="flex2">
                                            <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                            <button style={{ backgroundColor: "#C42F63" }}>Хуваалцах</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


        </Col>
    )
}

export default allMain

const newsData = [
    {
        title: 'ШОРОНГИЙН ДУУЛИАНААР АМЖУУЛСАН ХУУЛЬ БУС ТОМИЛГОО',
        desc: 'Ерөнхий сайд У.Хүрэлсүх “Надаас болон миний тэргүүлсэн Засгийн газраас хууль бус зүйл битгий хүсээрэй, хууль бус зүйл хийлгэх гэж битгий шахаж шаардаарай. Би зөвхөн хуулинд захирагдаж ажиллах',
        date: '2019.05.10',
        img: require('../image/slider3.jpg')
    },
    {
        title: ' АНУ МАНЛАЙЛЛАА ГЕРМАНД АЛДЖЭЭ',
        desc: '11Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
        date: '2019.05.11',
        img: require('../image/slider1.jpg')
    },
    {
        title: 'КИМ ЖОН УН ТОМ СОРИЛТЫН ӨМНӨ ИРЭЭД БАЙНА',
        desc: 'Хойд Солонгосын үе үеийн удирдагч нар хэдэн арван жилийн турш улс эх орноо гаднын ертөнцөөс, капиталистууд, АНУ эсвэл бусад дайсагнасан хүчинүүдээс хамгаална гэсэн үзэл баримтлал',
        date: '2016.01.10',
        img: require('../image/news.jpg')
    },
    {
        title: 'УОК сургууль, цэцэрлэгийг нээх эсэхийг хэлэлцэнэ',
        desc: 'Одоогоор дэлхий даяар 150 гаруй лаборатори, сургууль эмнэлэг коронавирусийн эсрэг вакцин бүтээхээр ажиллаж байгаа ба үүний 20 гаруй нь хүн дээр турших туршилтаа эхлүүлээд',
        date: '2016.01.10',
        img: require('../image/slider2.jpg')
    },
    {
        title: 'Улсын онцгой комиссын шийдвэрээр энэ сард үйлдэх тусгай нислэгийг нэмэгдүүлж 14 нислэгээр',
        desc: '22Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
        date: '2016.01.10',
        img: require('../image/download.jpg')
    }
]
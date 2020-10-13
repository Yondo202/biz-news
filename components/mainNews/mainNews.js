import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-bootstrap';
import BigMain from './bigMain'
import Allmain from './allMain'



function mainNews(props) {
    // const router = useRouter();
    // const myRoute = router.query.slug
    // console.log(myRoute, ' this is my router shuu')
    return (
        <div className="BackMainNewsPar">
            <Container className="containers" fluid >
                <Row style={{ marginTop: 20 }}>
                    < BigMain big={props.big} />
                    <Allmain small={props.all} />
                </Row>
            </Container>
        </div>
    );
}

export default mainNews;

// export class mainNews extends Component {

//     state = {
//         search: '',
//         selectedContent: newsData[0]
//     }

//     setSearch = (e) => {
//         this.setState({ search: e.target.value });
//     }
//     clickHandler = (e) => {
//         // console.log(e.target, 'heey');
//         this.setState({ selectedContent: newsData[e.target.tabIndex] })
//     }



//     render() {

//         console.log(this.props.all, 'all shuu guys hehe')
//         console.log(this.props.big, 'big hehe')

//         return (
//             <div className="BackMainNewsPar">
//                 <Container className="containers" fluid >
//                     <Row style={{ marginTop: 20 }}>
//                         < BigMain big={this.props.big} />
//                         <Allmain small={this.props.all} />
//                     </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default mainNews


// const newsData = [
//     {
//         title: 'ШОРОНГИЙН ДУУЛИАНААР АМЖУУЛСАН ХУУЛЬ БУС ТОМИЛГОО',
//         desc: 'Ерөнхий сайд У.Хүрэлсүх “Надаас болон миний тэргүүлсэн Засгийн газраас хууль бус зүйл битгий хүсээрэй, хууль бус зүйл хийлгэх гэж битгий шахаж шаардаарай. Би зөвхөн хуулинд захирагдаж ажиллах',
//         date: '2019.05.10',
//         img: require('../image/slider3.jpg')
//     },
//     {
//         title: ' АНУ МАНЛАЙЛЛАА ГЕРМАНД АЛДЖЭЭ',
//         desc: '11Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
//         date: '2019.05.11',
//         img: require('../image/slider1.jpg')
//     },
//     {
//         title: 'КИМ ЖОН УН ТОМ СОРИЛТЫН ӨМНӨ ИРЭЭД БАЙНА',
//         desc: 'Хойд Солонгосын үе үеийн удирдагч нар хэдэн арван жилийн турш улс эх орноо гаднын ертөнцөөс, капиталистууд, АНУ эсвэл бусад дайсагнасан хүчинүүдээс хамгаална гэсэн үзэл баримтлал',
//         date: '2016.01.10',
//         img: require('../image/news.jpg')
//     },
//     {
//         title: 'УОК сургууль, цэцэрлэгийг нээх эсэхийг хэлэлцэнэ',
//         desc: 'Одоогоор дэлхий даяар 150 гаруй лаборатори, сургууль эмнэлэг коронавирусийн эсрэг вакцин бүтээхээр ажиллаж байгаа ба үүний 20 гаруй нь хүн дээр турших туршилтаа эхлүүлээд',
//         date: '2016.01.10',
//         img: require('../image/slider2.jpg')
//     },
//     {
//         title: 'Улсын онцгой комиссын шийдвэрээр энэ сард үйлдэх тусгай нислэгийг нэмэгдүүлж 14 нислэгээр',
//         desc: '22Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
//         date: '2016.01.10',
//         img: require('../image/slider2.jpg')
//     }
// ]
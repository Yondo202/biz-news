import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
// import {ImEye} from 'react-icons';
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

export class BetweenNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //  AllData : []
        }
    }
    // componentDidMount(){

    // }
    render() {
        // const HomeVideos = this.props.HomeVideos;
        const HomeVideos1 = this.props.HomeVideos;
        const AllNews = this.props.AllNews
        const HomeAudio = this.props.HomeAudio
        const myAllData = [...HomeVideos1, ...AllNews, ...HomeAudio]
        // console.log(myAllData, 'myall Data');
        const Brandfilter = myAllData.filter(x => x.filter == 'Brand');
        const Businessfilter = myAllData.filter(x => x.filter == 'Business');
        const Startup = myAllData.filter(x => x.filter == 'Startup')
        // console.log(Brandfilter[0], 'ene bol filter brand')
        // console.log(Businessfilter, 'ene bol filter Businessfilter')
        // console.log(Startup, 'ene bol filter Startup')

        return (
            <Container className="betweenNewsPar">
                <Row>
                    <Col Col md={4} >
                        <div style={{ marginBottom: 40 }}>
                            <div className="TopSmall">
                                <img src={`${Brandfilter[0].image.url}`} />
                                <div className="background"></div>
                                <div className="content">
                                    <div className="catigory">
                                        <span>{Brandfilter[0].filter}</span>
                                    </div>
                                    <div className="Title">
                                        <Link href={`${Brandfilter[0].path}/[slug]`} as={`${Brandfilter[0].path}/${Brandfilter[0].slug}`}>
                                            <h2>
                                                {Brandfilter[0].title}
                                            </h2>
                                        </Link>
                                    </div>
                                    <div className="smallCont">
                                        <div className="date">
                                            <MdDateRange />
                                            <span>
                                                {Brandfilter[0].date}
                                            </span>
                                        </div>
                                        <div className="SeeCount">
                                            <AiOutlineEye />
                                            <span>
                                                185
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {Brandfilter.reverse().slice(0, 2).map((el, i) => {
                                return (
                                    <div className='contPar' key={i}>
                                        <Row>
                                            <Col md={4} sm={4} xs={4}>
                                                <div className="imgPar">
                                                    <img src={`${el.image.url}`} />
                                                    <div className="hover1"></div>
                                                    <div className="hover2"></div>
                                                </div>
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <div className="content">
                                                    <div className="catigory">
                                                        <span>{el.filter}</span>
                                                    </div>
                                                    <div className="Title1">
                                                        <Link href={`${el.path}/[slug]`} as={`${el.path}/${el.slug}`}>
                                                            <span>
                                                                {el.title}
                                                            </span>
                                                        </Link>

                                                    </div>
                                                    <div className="smallCont">
                                                        <div className="date">
                                                            <MdDateRange />
                                                            <span>
                                                                {el.date}
                                                            </span>
                                                        </div>
                                                        <div className="SeeCount">
                                                            <AiOutlineEye />
                                                            <span>
                                                                185
                                                     </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}



                            {/* <div className='contPar'>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className="imgPar">
                                            <img src={require('../image/last2.jpg')} />
                                            <div className="hover1"></div>
                                            <div className="hover2"></div>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Brand</span>
                                            </div>
                                            <div className="Title1">
                                                <span>
                                                    Франкфуртаас 261 иргэн эх орондоо ирлээsdgs dgsdgsdgsd gsdgsdgsdg
                                                </span>
                                            </div>
                                            <div className="smallCont">
                                                <div className="date">
                                                    <MdDateRange />
                                                    <span>
                                                        March 23, 2019
                                                 </span>
                                                </div>
                                                <div className="SeeCount">
                                                    <AiOutlineEye />
                                                    <span>
                                                        185
                                                     </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
                        </div>
                    </Col>






                    <Col Col md={4} >
                        <div style={{ marginBottom: 40 }}>
                            <div className="TopSmall">
                                <img src={`${Businessfilter[0].image.url}`} />
                                <div className="background"></div>
                                <div className="content">
                                    <div className="catigory">
                                        <span>{Brandfilter[0].filter}</span>
                                    </div>
                                    <div className="Title">
                                        <Link href={`${Businessfilter[0].path}/[slug]`} as={`${Businessfilter[0].path}/${Businessfilter[0].slug}`}>
                                            <h2>
                                                {Businessfilter[0].title}
                                            </h2>
                                        </Link>
                                    </div>
                                    <div className="smallCont">
                                        <div className="date">
                                            <MdDateRange />
                                            <span>
                                                {Businessfilter[0].date}
                                            </span>
                                        </div>
                                        <div className="SeeCount">
                                            <AiOutlineEye />
                                            <span>
                                                185
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {Businessfilter.reverse().slice(0, 2).map((el, i) => {
                                return (
                                    <div className='contPar' key={i}>
                                        <Row>
                                            <Col md={4} sm={4} xs={4}>
                                                <div className="imgPar">
                                                    <img src={`${el.image.url}`} />
                                                    <div className="hover1"></div>
                                                    <div className="hover2"></div>
                                                </div>
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <div className="content">
                                                    <div className="catigory">
                                                        <span>{el.filter}</span>
                                                    </div>
                                                    <div className="Title1">
                                                        <Link href={`${el.path}/[slug]`} as={`${el.path}/${el.slug}`}>
                                                            <span>
                                                                {el.title}
                                                            </span>
                                                        </Link>

                                                    </div>
                                                    <div className="smallCont">
                                                        <div className="date">
                                                            <MdDateRange />
                                                            <span>
                                                                {el.date}
                                                            </span>
                                                        </div>
                                                        <div className="SeeCount">
                                                            <AiOutlineEye />
                                                            <span>
                                                                185
                                                     </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}

                        </div>
                    </Col>








                    <Col Col md={4} >
                        <div style={{ marginBottom: 40 }}>
                            <div className="TopSmall">
                                <img src={`${Startup[0].image.url}`} />
                                <div className="background"></div>
                                <div className="content">
                                    <div className="catigory">
                                        <span>{Startup[0].filter}</span>
                                    </div>
                                    <div className="Title">
                                        <Link href={`${Startup[0].path}/[slug]`} as={`${Startup[0].path}/${Startup[0].slug}`}>
                                            <h2>
                                                {Startup[0].title}
                                            </h2>
                                        </Link>
                                    </div>
                                    <div className="smallCont">
                                        <div className="date">
                                            <MdDateRange />
                                            <span>
                                                {Startup[0].date}
                                            </span>
                                        </div>
                                        <div className="SeeCount">
                                            <AiOutlineEye />
                                            <span>
                                                185
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {Startup.reverse().slice(0, 2).map((el, i) => {
                                return (
                                    <div className='contPar' key={i}>
                                        <Row>
                                            <Col md={4} sm={4} xs={4}>
                                                <div className="imgPar">
                                                    <img src={`${el.image.url}`} />
                                                    <div className="hover1"></div>
                                                    <div className="hover2"></div>
                                                </div>
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <div className="content">
                                                    <div className="catigory">
                                                        <span>{el.filter}</span>
                                                    </div>
                                                    <div className="Title1">
                                                        <Link href={`${el.path}/[slug]`} as={`${el.path}/${el.slug}`}>
                                                            <span>
                                                                {el.title}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="smallCont">
                                                        <div className="date">
                                                            <MdDateRange />
                                                            <span>
                                                                {el.date}
                                                            </span>
                                                        </div>
                                                        <div className="SeeCount">
                                                            <AiOutlineEye />
                                                            <span>
                                                                185
                                                     </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}



                            {/* <div className='contPar'>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className="imgPar">
                                            <img src={require('../image/last2.jpg')} />
                                            <div className="hover1"></div>
                                            <div className="hover2"></div>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className="content">
                                            <div className="catigory">
                                                <span>Brand</span>
                                            </div>
                                            <div className="Title1">
                                                <span>
                                                    Франкфуртаас 261 иргэн эх орондоо ирлээsdgs dgsdgsdgsd gsdgsdgsdg
                                                </span>
                                            </div>
                                            <div className="smallCont">
                                                <div className="date">
                                                    <MdDateRange />
                                                    <span>
                                                        March 23, 2019
                                                 </span>
                                                </div>
                                                <div className="SeeCount">
                                                    <AiOutlineEye />
                                                    <span>
                                                        185
                                                     </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
                        </div>
                    </Col>




                </Row>
            </Container >
        )
    }
}

export default BetweenNews

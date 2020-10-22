import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import { RiHome3Line } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'


export class topReadNews extends Component {
    state = {
        selectedContent: this.props.AllNews,
        ClickBtnClass: '',
        ClickBtnClass2: '',
        styles: '0',
        // stylesScale: 'scale(1)',
        // stylesScale2: 'scale(1)'
    }

    clickHandler = (e) => {
        // console.log(e.target, 'heey');

        const myData = this.props.AllNews.slice(0, 3);
        const myDataLatest = this.props.AllNews.slice(0, 2);
        if(e.target.tabIndex == 1){
            this.setState({ 
                selectedContent: myData,
                ClickBtnClass: 'active',
                ClickBtnClass2: '',
                styles: '0'
             })
        }else if(e.target.tabIndex == 2){
            this.setState({ 
            selectedContent: myDataLatest,
            ClickBtnClass2: 'active2',
            ClickBtnClass: '',
            styles: '124px'
         })
        }else{
            this.setState({
                selectedContent: myData,
                styles: `0`
            })
            
        }
        // this.setState({ selectedContent: this.props.AllNews[e.target.tabIndex] })
    }

    
    render() {
        // const AllNews = this.props.AllNews
        // const myData = AllNews.reverse().slice(0, 3);
        // console.log(myData[0].desc.slice(600, 1000), 'odoo jinken');
        console.log(this.props.Vbunner, ' my data kkk')
        console.log(this.props.Vbunner2, ' my data kkk22222222')
        return (
            <Container fluid style={{width:'70%'}} className="topReadNews">
                <Row style={{ marginTop: 50 }}>
                    <Col md={9}>
                        <div className="NewsPar">
                            <div className="Title">
                                    <div className="childTitles">
                                        <h6 tabIndex={1} onClick={this.clickHandler} className={this.state.ClickBtnClass} >Их уншсан</h6>
                                        <h6 tabIndex={2} onClick={this.clickHandler} className={`${this.state.ClickBtnClass2} + title2`}>Сүүлд орсон</h6>
                                    </div>
                                    <div className="line"><div style={{marginLeft: this.state.styles}} className="line2"></div></div>
                            </div>

                            {this.state.selectedContent.slice(0, 3).map((el, index) => {
                                console.log(index, ' this is index')
                                return (
                                    <div className='contPar' key={index}>
                                        <Row >
                                            <Col md={3} style={{transform: 'scale(1)'}}>
                                                <div className="imgPar">
                                                    <img src={`${el.image.url}`} alt="myImage" />
                                                    <div className="hover1"></div>
                                                    <div className="hover2"></div>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className="content">
                                                    <div className="catigory">
                                                        <span>{el.filter}</span>
                                                    </div>
                                                    <div className="Title1">
                                                        <Link href="/posts/[slug]" as={`/posts/${el.slug}`} >
                                                            <h6>
                                                                {el.title}
                                                            </h6>
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
                                                    <div className="Desc">
                                                        {el.title} 
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="BunnerPaR">
                            <Row>
                            <Col md={12}>
                                <Link href={`${this.props.Vbunner2.url}`} >
                                    <a target="_blank">
                                    <div className="bunner">
                                        <section className="homeVide"
                                            style={{
                                                position: `relative`,
                                                height: `100%`,
                                                height: `-moz-available`,
                                                height: `-webkit-fill-available`,
                                                height: `fill-available`,
                                                minHeight: `100%`,
                                                width: `100%`,
                                                zIndex: `1`,
                                                overflow: `hidden`,
                                            }}
                                        >
                                             <img  src={`${this.props.Vbunner2.video.url}`} alt="bunnerImg" />
                                        </section>
                                        {/* <div className="contents">
                                            <span>Banner Area Banner Area
                                            250 x 300
                                            </span>
                                        </div> */}
                                    </div>
                                    </a>
                                   
                                </Link>
                                </Col>
                                <Col md={12}>
                                <Link href={`${this.props.Vbunner.url}`} >
                                    <a target="_blank">
                                    <div className="bunner">
                                        <section className="homeVide"
                                            style={{
                                                position: `relative`,
                                                height: `100%`,
                                                height: `-moz-available`,
                                                height: `-webkit-fill-available`,
                                                height: `fill-available`,
                                                minHeight: `100%`,
                                                width: `100%`,
                                                zIndex: `1`,
                                                overflow: `hidden`,
                                            }}
                                        >
                                             <img src={`${this.props.Vbunner.video.url}`} alt="bunnerImage" />
                                        </section>
                                        {/* <div className="contents">
                                            <span>Banner Area Banner Area
                                            250 x 300
                                            </span>
                                        </div> */}
                                    </div>
                                    </a>
                                   
                                </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default topReadNews

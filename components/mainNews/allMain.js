import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { Component } from 'react'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};




export class allMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            className: "headPar",
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 1) {

            this.setState({ className: "scrollDown" });
        } else {
            this.setState({ className: "headPar" });

        }
        // console.log('lalalall', window.pageYOffset)
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        console.log(this.props.small, ' zangilga data')
        const allData = this.props.small
        return (
            <Col md={4} style={{position:"relative"}}>
                <div className="otherNewsParent">
                    <div className="dailyTitle">
                        <h1 >Daily News</h1>
                        <div className="linePAr">
                            <div className="line"></div>
                            <div className="line2"></div>
                        </div>

                    </div>
                    <div className="ScrollPar">
                        {allData.map((el, i) => {
                            return (
                                <motion.div initial="exit" animate="enter" exit="exit">
                                    <motion.div variants={textVariants} >
                                        <div key={i} className="contentPar" >
                                            <div className="flexPar">
                                                <div className="flex1">
                                                    {/* <img src={el.image.url} /> */}
                                                    <img src={`${el.image.url}`} />
                                                    <div className="flex1Text">
                                                        <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                            <h6 >{el.title}</h6>
                                                        </Link>
                                                        <span className="date">{el.date}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            )
                        })}
                    </div>

                    <div className="bunner">
                        <section className="homeVide"
                            style={{
                                position: `relative`, height: `100%`, height: `-moz-available`, height: `-webkit-fill-available`, height: `fill-available`,
                                minHeight: `100%`,
                                width: `100%`,
                                zIndex: `1`,
                                overflow: `hidden`,
                            }}
                        >
                            <div className="background">
                            </div>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    position: `absolute`,
                                    left: `50%`,
                                    top: `50%`,
                                    transform: `translate(-50%,-50%)`,
                                    width: `auto`,
                                    height: `auto`,
                                    minHeight: `100%`,
                                    minWidth: `100%`,
                                }}
                            >
                                {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}
                                {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
                            </video>
                            <img src={allData[0].image.url} />

                        </section>
                        <div className="contents">
                            <span>Banner Area Banner Area
                            250 x 300
                                            </span>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default allMain







// function allMain(props) {
//     console.log(props.small, ' zangilga data')
//     const allData = props.small
//     return (
//         <Col md={3}>
//             <div className="dailyTitle">
//                 <h1 >Daily News</h1>
//                 <div className="linePAr">
//                     <div className="line"></div>
//                     <div className="line2"></div>
//                 </div>

//             </div>
//             <div className="ScrollPar">
//                 {allData.map((el, i) => {
//                     return (
//                         <motion.div initial="exit" animate="enter" exit="exit">
//                             <motion.div variants={textVariants} >
//                                 <div key={i} className="contentPar" >
//                                     <div className="flexPar">
//                                         <div className="flex1">
//                                             {/* <img src={el.image.url} /> */}
//                                             <img src={`${el.image.url}`} />
//                                             <div className="flex1Text">
//                                                 <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
//                                                     <h6 >{el.title}</h6>
//                                                 </Link>
//                                                 <span className="date">{el.date}</span>
//                                             </div>
//                                         </div>
//                                         {/* <div className="flex2">
//                                             <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
//                                                 <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
//                                             </Link>
//                                             <button style={{ backgroundColor: "#C42F63" }}>Хуваалцах</button>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </motion.div>

//                     )
//                 })}
//             </div>

//             <div className="bunner">
//                 <section className="homeVide"
//                     style={{
//                         position: `relative`,
//                         height: `100%`,
//                         height: `-moz-available`,
//                         height: `-webkit-fill-available`,
//                         height: `fill-available`,
//                         minHeight: `100%`,
//                         width: `100%`,
//                         zIndex: `1`,
//                         overflow: `hidden`,
//                     }}
//                 >
//                     <div className="background">
//                     </div>
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         style={{
//                             position: `absolute`,
//                             left: `50%`,
//                             top: `50%`,
//                             transform: `translate(-50%,-50%)`,
//                             width: `auto`,
//                             height: `auto`,
//                             minHeight: `100%`,
//                             minWidth: `100%`,
//                         }}
//                     >
//                         {/* <source src='/videos/back1.mp4' type="video/mp4" /> */}




//                         {/* <source src={`http://localhost:1337${videoUrl}`} type={this.props.homeVideo.video.mime} /> */}
//                     </video>
//                 <img src={allData[0].image.url} />

//                 </section>
//                 <div className="contents">
//                     <span>Banner Area Banner Area
//                     250 x 300
//                                             </span>
//                 </div>
//             </div>
//         </Col>
//     )
// }

// export default allMain
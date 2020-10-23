import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import React, { Component, useEffect, useState } from 'react'
export const config = { amp: 'hybrid' }
import {useAmp} from 'next/amp'
import {ImFire} from 'react-icons/im'
import {FiClock} from 'react-icons/fi'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { x: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};

function allMain(props) {
    const [className, setClassName] = useState('headPar');
    const [selectedContent, setSelectedContent] = useState(props.small);
    const [ClickBtnClass, setClickBtnClass] = useState('active');
    const [ClickBtnClass2, setClickBtnClass2] = useState('');
    const [styles, setStyles] = useState('0');
    const [flexClassName, setflexClassName] = useState('otherNewsParent');
    const [scaleStyle, setScaleStyle] = useState('scale(1)');
    const [opacity, setOpacity] = useState('1');
    const [bunnerScale, setBunnerScale] = useState('block');



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })

    const handleScroll = () => {
        if (window.pageYOffset > 1) {
            setClassName('scrollDown');
        }


        if(window.pageYOffset > 1500 ){
            setflexClassName('otherNewsParent2')
            setBunnerScale('none')
        }else{
            setflexClassName('otherNewsParent')
            setBunnerScale('block')
        }

        if(window.pageYOffset > 1200 && window.pageYOffset < 1600 ){
            setScaleStyle('scale(0.5)')
            setOpacity('0')
        } else {
            setScaleStyle('scale(1)')
            setOpacity('1')
        }


       
        // if(window.pageYOffset >= 1510 ){
        //     setScaleStyle('scale(1)')
        // }else{
        //     setScaleStyle('scale(1)')
        // }
        // console.log('lalalall', window.pageYOffset)
    }

    const clickHandler = (e) => {
  
        const topSeeNews = props.small.slice(0, 10)
        
        const latestNews = props.small.slice(0, 4).reverse()
        if(e.target.tabIndex == 1){
            setSelectedContent(topSeeNews);
            setClickBtnClass('active')
            setClickBtnClass2('')
            setStyles('0%')
        }else if(e.target.tabIndex == 2){
            setSelectedContent(latestNews);
            setClickBtnClass('')
            setClickBtnClass2('active2')
            setStyles('50%')
        }else{
            setSelectedContent(topSeeNews);
            setStyles('0%')
        }
    }





    const router = useRouter()
    const myRoute = router.query.slug
    const myAmp = useAmp();
    console.log(myAmp, 'this is my Amp ........')
    console.log(config , 'my Config')
    return (
        <Col className="fixCol" md={3} >
            <div className={flexClassName} style={{transform: scaleStyle, opacity:opacity}}>
                <div className="dailyTitle">
                    <div className="titleChild">
                        <ImFire tabIndex={1} onClick={clickHandler}  className={ClickBtnClass}/>
                        <FiClock tabIndex={2} onClick={clickHandler}  className={ClickBtnClass2} />
                        {/* <h1>Мэдээнүүд</h1> */}
                    </div>
                    <div className="linePAr">
                        <div className="line"></div>
                        <div style={{marginLeft: styles}} className="line2"></div>
                    </div>
                </div>

                <div className="ScrollPar">
                    {selectedContent.map((el, i) => {
                        return (
                            <motion.div initial="exit" animate="enter" exit="exit">
                                <motion.div variants={textVariants} >
                                    {myRoute == el.slug ? <div style={{display:'none'}} key={i} className="contentPar" >
                                        <div  className="flexPar">
                                            <div className="flex1">
                                                {/* <img src={el.image.url} /> */}
                                                <img src={`${el.image.url}`} alt="myImageHere" />
                                                <div className="flex1Text">
                                                    <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                        <h6 >{el.title}</h6>
                                                    </Link>
                                                    <span className="date">{el.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : <div key={i} className="contentPar" >
                                            <div className="flexPar">
                                                <div className="flex1">
                                                    {/* <img src={el.image.url} /> */}
                                                    <img src={`${el.image.url}`} alt="myImageHere" />
                                                    <div className="flex1Text">
                                                        <Link href="/posts/[slug]" as={`/posts/${el.slug}`}>
                                                            <h6 >{el.title}</h6>
                                                        </Link>
                                                        <span className="date">{el.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}

                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
                <Link href={`${props.Vbunner2.url}`} >
                                    <a target="_blank">
                                    <div className="bunner" style={{display:bunnerScale}}>
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
                                             <img src={`${props.Vbunner2.video.url}`} alt="myBunnerImg" />
                                        </section>
                                        {/* <div className="contents">
                                            <span>Banner Area Banner Area
                                            250 x 300
                                            </span>
                                        </div> */}
                                    </div>
                                    </a>
                                   
                                </Link>

                            <Link href={`${props.Vbunner.url}`} >
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
                                             <img src={`${props.Vbunner.video.url}`} alt="myBunnerImg" />
                                        </section>
                                    </div>
                                    </a>
                                </Link>
            </div>
        </Col>
    );
}

export default allMain;


import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaEye, FaComments } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookShareCount,
} from 'react-share';

import {
    FacebookIcon,
    EmailIcon,
    TwitterIcon,
} from 'react-share';
import { Parser } from 'html-to-react';
import Link from 'next/link'
import HighlightPop from 'react-highlight-pop';
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter} from 'react-icons/ai'

const huwirgagch = new Parser();

let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, opacity: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};
const textVariants2 = {
    exit: { scale: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        scale: 0,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};


function bigMain(props) {

    const [className, setClassName] = useState('ScrollHead2');
    const [classNameBtn, setClassNameBtn] = useState('shareBtnPar2');

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setClassName('ScrollHead');
            setClassNameBtn('shareBtnPar');
        } else {
            setClassName('ScrollHead2');
            setClassNameBtn('shareBtnPar2');
        }
        console.log('lalalall', window.pageYOffset)
    }
    const slugData = props.big
    console.log(slugData, 'this my slug data')

      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbiznet-news.vercel.app%2Fposts%2F${slugData.slug}`;
      const twitterUrl = `https://twitter.com/intent/tweet?url=${slugData.slug}`;
    return (
                    <Col md={9}>
                <div className={className}>
                    <Link href="/">
                        <img src={require('../image/logo.png')} alt="myImageHere"></img>
                    </Link>
                    <div className="Line"></div>
                    <div className="TitlePar">
                        "{slugData.title}"
                    </div>
                </div>
                <motion.div initial="exit" animate="enter" exit="exit">
                    <motion.div variants={textVariants}>
                        <div className="mainCon">
                            <div className="title">
                             <h2 >{slugData.title}</h2>
                                <div className={classNameBtn}>
                                    <div className="ProfileCon">
                                        <img src={`${slugData.NiitlegchZurag.url}`} alt="myImageHere"></img>
                                        <div className="textPar">
                                            <span className="Name">{slugData.niitlegchNer}</span>
                                            <div className="other">
                                                <span className="filter">{slugData.filter}</span>
                                                {/* <span className="filter2">Ярилцлага</span> */}
                                                <span className="date">{slugData.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ButtonsPAr">
                                        <FacebookShareButton  imageURL={slugData.image.url} title="hahaha" media={slugData.image.url} resetButtonStyle={true} url={`https://bizi.mn/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
                                            <FacebookIcon />
                                            <FacebookShareCount url={`https://bizi.mn/${slugData.path}/${slugData.slug}`}>
                                                {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
                                            </FacebookShareCount>
                                        </FacebookShareButton>
                                        <TwitterShareButton   media={slugData.image.url} resetButtonStyle={true} url={`https://bizi.mn/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
                                            <TwitterIcon   ></TwitterIcon>
                                        </TwitterShareButton>
                                    </div>
                                </div>
                                {/* <div className="linePAr">
                                    <div className="line"></div>
                                    <div className="line2"></div>
                                </div> */}
                                <img src={`${slugData.image.url}`} alt="myImageHere" />
                                <HighlightPop popoverItems={itemClass => (
                                    <div className="iconPar">
                                            {/* <span 
                                                className={itemClass} onClick={() => alert('sharing')}>
                                                share
                                            </span> */}
                                            <a className={itemClass} href={facebookUrl} target="_blank">
                                                <GrFacebookOption />
                                            </a>
                                            <a className={itemClass} href={twitterUrl} target="_blank">
                                                <AiOutlineTwitter />
                                            </a>
                                    </div>
                                           
                                        )}>
                                <div className="content sun-editor-editable sun-editor">{huwirgagch.parse(slugData.desc)}</div>

                                </HighlightPop>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-include-parent="true" data-width=""></div>
            </Col>
    );
}

export default bigMain;






// export class bigMain extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             className: "shareBtnPar2",
//             color: 'white',
//             className2: 'ScrollHead2'
//         }
//     }



//     componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll);
//     }

//     handleScroll = () => {
//         if (window.pageYOffset > 100) {
//             this.setState({ className: "shareBtnPar" });
//             this.setState({ className2: "ScrollHead" });

//         } else {
//             this.setState({ className: "shareBtnPar2" });
//             this.setState({ className2: "ScrollHead2" });

//         }
//         console.log('lalalall', window)
//     }

//     render() {
//         console.log(this.props.big, 'hiahia big big big')
//         console.log(this.props.small, 'small hehe')
//         const slugData = this.props.big



//         // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
//         // const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
//         // const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
//         return (
//             <Col md={8}>
//                 <div className={this.state.className2}>
//                     <Link href="/">
//                         <img src={require('../image/logo.png')} alt="myImageHere"></img>
//                     </Link>
//                     <div className="Line"></div>
//                     <div className="TitlePar">
//                         "{slugData.title}"
//                     </div>
//                 </div>
//                 <motion.div initial="exit" animate="enter" exit="exit">
//                     <motion.div variants={textVariants}>
//                         <div className="mainCon">
//                             <div className="title">
                            
//                              <h2 >{slugData.title}</h2>
                          
//                                 <div className={this.state.className}>
//                                     <div className="ProfileCon">
//                                         <img src={require('../image/103804281_10220809760368036_8805337625036517462_n.jpg')} alt="myImageHere"></img>
//                                         <div className="textPar">
//                                             <span className="Name">Д.Цацрал</span>
//                                             <div className="other">
//                                                 <span className="filter">{slugData.filter}</span>
//                                                 <span className="filter2">Ярилцлага</span>
//                                                 <span className="date">{slugData.date}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="ButtonsPAr">
//                                         <FacebookShareButton  imageURL={slugData.image.url} title="hahaha" media={slugData.image.url} resetButtonStyle={true} url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
//                                             <FacebookIcon />
//                                             <FacebookShareCount url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`}>
//                                                 {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
//                                             </FacebookShareCount>
//                                         </FacebookShareButton>
//                                         <TwitterShareButton   media={slugData.image.url} resetButtonStyle={true} url={`https://biznet-news.vercel.app/${slugData.path}/${slugData.slug}`} style={{ width: 50, height: 50 }} >
//                                             <TwitterIcon   ></TwitterIcon>
//                                         </TwitterShareButton>
//                                     </div>
//                                 </div>
//                                 {/* <div className="linePAr">
//                                     <div className="line"></div>
//                                     <div className="line2"></div>
//                                 </div> */}
//                                 <img src={`${slugData.image.url}`} alt="myImageHere" />
//                                 <HighlightPop popoverItems={itemClass => (
//                                     <div>
//                                             <span 
//                                                 className={itemClass} onClick={() => alert('sharing')}>
//                                                 share
//                                             </span>
//                                             {/* <a href={facebookUrl}>
//                                                 click em
//                                             </a> */}
//                                     </div>
                                           
//                                         )}>
//                                 <div className="content sun-editor-editable sun-editor">{huwirgagch.parse(slugData.desc)}</div>

//                                 </HighlightPop>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </Col>
//         )
//     }
// }

// export default bigMain

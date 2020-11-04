import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import BigVideo from './bigVideo'
import AllVideo from './allVideo'
import { AiOutlineEye } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
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


export class HomeVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            myClass: 'offMenu'
        };

    }
    setSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        console.log(this.props.big, 'big shuu deeeeeeeeeeeee ')
        console.log(this.props.all, 'tiimee all')

        const big = this.props.big
        const allData = this.props.all
        return (
            <div className="VideoParent">
                <Parallax
                    // bgImage={require(`../image/slider3.jpg`)}
                    bgImage={`${this.props.big.image.url}`}
                    bgImageAlt="the cat"
                    strength={600}
                    className="bigNews"
                    blur={{ min: -1, max: 5 }}
                >
                    <div className="bigNewsBackground">
                        <div className="videoPAr player-wrapper" >
                            {/* <Player fluid={false} autoplay={true} ref={player => { this.player = player;}}
                                            autoPlay>
                                            <ControlBar autoHide={true} className="my-class">
                                                <ReplayControl seconds={5} order={2.1} />
                                                <ForwardControl seconds={5} order={3.1} />
                                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                            </ControlBar>
                                            <BigPlayButton position="center" />
                                            <source src={'/videos/video3.mp4'} />
                                        </Player> */}
                            <BigVideo big={big} />
                            {/* <AllVideo allData={allData} /> */}
                            <div className="VideoContents">
                                <div className="mainCon">
                                    <div className="filterPAr">
                                        <span>
                                            {big.filter}
                                        </span>
                                        <div className="line"></div>
                                    </div>
                                    <span>

                                    </span>
                                    <div className="titlePAr">
                                        <span>
                                            {big.title}
                                        </span>
                                    </div>
                                    <div className="date">
                                        <MdDateRange />
                                        <span>
                                            {big.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="SeeAndCount">
                                    <div className="shareParents">
                                        <FacebookShareButton url={`https://bizi.mn/${big.path}/${big.slug}`} style={{ width: 50, height: 50 }} >
                                            <FacebookIcon size={30} ></FacebookIcon>
                                            <FacebookShareCount url={`https://bizi.mn/${big.path}/${big.slug}`}>
                                                {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
                                            </FacebookShareCount>
                                        </FacebookShareButton>

                                        <TwitterShareButton url={`https://biznet-news.vercel.app/${big.path}/${big.slug}`} style={{ width: 50, height: 50 }} >
                                            <TwitterIcon size={30} ></TwitterIcon>
                                        </TwitterShareButton>

                                        <EmailShareButton url={`https://biznet-news.vercel.app/${big.path}/${big.slug}`} style={{ width: 50, height: 50 }} >
                                            <EmailIcon size={30} ></EmailIcon>
                                        </EmailShareButton>
                                    </div>
                                    <div className="counts">
                                        <div className="seeCount">
                                            <AiOutlineEye />
                                            <span>255</span>
                                        </div>
                                        <div className="commentCount">
                                            <FaRegComment />
                                            <span>33</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </Parallax>
                <AllVideo allData={allData} />
            </div >
        )
    }
}

export default HomeVideo





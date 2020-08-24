import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Player, ControlBar, BigPlayButton, ReplayControl, ForwardControl, PlaybackRateMenuButton } from 'video-react';

import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa'
import BigVideo from './bigVideo'
import AllVideo from './allVideo'



export class HomeVideo extends Component {
    constructor(props ) {
        super(props);

        this.state = {
            search: '',
            selectedContent: VideoData[0],
            myClass: 'offMenu'
        };

    }

    setSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        console.log(this.props.big, 'big shuu ')
        console.log(this.props.all, 'tiimee all')

        const big = this.props.big
        const allData = this.props.all
        return (
            <div className="VideoParent">
                <Parallax
                    bgImage={require(`../image/slider3.jpg`)}
                    bgImageAlt="the cat"
                    strength={500}
                    className="bigNews"
                    blur={{ min: -1, max: 1 }}
                >
                    <div className="bigNewsBackground">

                        <div className="videoPAr player-wrapper" style={{ marginTop: 70 }}>
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
                            <AllVideo allData={allData} />

                        </div>



                    </div>
                </Parallax>
                {/* <div className="pb-3">
                    <button onClick={this.changeSource('sintelTrailer')} className="mr-3">
                        Sintel teaser
                    </button>
                    <button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
                        Bunny trailer
                    </button>
                    <button onClick={this.changeSource('bunnyMovie')} className="mr-3">
                        Bunny movie
                  </button>
                    <button onClick={this.changeSource('test')} className="mr-3">
                        Test movie
                    </button>
                </div> */}

            </div>
        )
    }
}

export default HomeVideo


const VideoData = [
    {
        title: "Нийтийн албанд томилогдохоор нэр дэвшсэн",
        url: "https://www.youtube.com/watch?v=ehYPGS4WHlg",
        date: 'July 27, 2019,',
    },
    {
        title: "Коронавируст халдвар (Covid-19) 2020-07-28-ны байдлаар,",
        url: "https://www.youtube.com/watch?v=DiJzNNewpXA",
        date: 'July 27, 1020'
    },
    {
        title: "Эрүүл мэндийн яамнаас коронавирусийн халдварын талаар",
        url: "/videos/video3.mp4",
        date: 'June 27, 2020'
    },
    {
        title: "Хятадын Ухань хотын шинжлэх, ухаан технологийн их сургууль",
        url: "https://www.facebook.com/FIVBVolleyballWorld/videos/563353680895130/",
        date: 'July 24, 2220'
    },
    {
        title: " Паркинсоны өвчтэй 2000 хүн, тэдгээрийн гэр бүл",
        url: "/videos/video3.mp4",
        date: 'July 27, 2020'
    },
    {
        title: "Нийтийн албанд томилогдохоор нэр дэвшсэн",
        url: "https://www.youtube.com/watch?v=ehYPGS4WHlg",
        date: 'July 27, 2019,'
    },
    {
        title: "Коронавируст халдвар (Covid-19) 2020-07-28-ны байдлаар,",
        url: "https://www.youtube.com/watch?v=DiJzNNewpXA",
        date: 'July 27, 1020'
    },
    {
        title: "Эрүүл мэндийн яамнаас коронавирусийн халдварын талаар",
        url: "https://www.facebook.com/kazenn1/videos/184744319737784",
        date: 'June 27, 2020'
    },
    {
        title: "Хятадын Ухань хотын шинжлэх, ухаан технологийн их сургууль",
        url: "https://www.facebook.com/FIVBVolleyballWorld/videos/563353680895130/",
        date: 'July 24, 2220'
    },
]



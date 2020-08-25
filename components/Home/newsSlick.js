import React, { Component } from 'react'
import Slider from "react-slick";
import { RiPlayCircleLine } from 'react-icons/ri'
import Link from 'next/link';


export class newsSlick extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const VideoData = this.props.VideoNews
        // console.log(VideoData, ' hahahhaha')
        return (
            <div className="ghostPar">
                <div className="background">

                </div>
                <div className="homeSliderPAr container-fluid" >


                    <Slider {...settings}>

                        {VideoData.map((el, i) => {
                            return (
                                <div key={i} className="ConPar" style={{ backgroundImage: `url(http://66.181.166.84:1337${el.image.url})` }}>
                                    <img src={`http://66.181.166.84:1337${el.image.url}`} />
                                    <div className="svg">
                                        <Link href="/videos/[slug]" as={`/videos/${el.slug}`} >
                                            <RiPlayCircleLine />
                                        </Link>
                                    </div>
                                    <div className="title">
                                        <h4>{el.desc}</h4>
                                    </div>
                                </div>

                            )
                        })}

                        {/* <div className="ConPar" style={{ backgroundImage: `url(${require('../image/social3.jpg')})` }}>
                            <img src={require('../image/news.jpg')} />
                            <div className="svg">
                                <RiPlayCircleLine />
                            </div>
                            <div className="title">
                                <h4>Сэрэмжтэй, хямгач хэрэглээг чухалчилъя Сэрэмжтэй, хямгач хэрэглээг чухалчилъя Сэрэмжтэй, хямгач хэрэглээг чухалчилъя</h4>
                            </div>
                        </div> */}


                    </Slider>



                </div>
            </div>

        )
    }
}

export default newsSlick


let sliderData = {

}
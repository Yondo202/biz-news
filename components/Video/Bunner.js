import React from 'react'

function Bunner(props) {
    const allData = props.allData
    return (
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
    )
}

export default Bunner

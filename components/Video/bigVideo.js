import React from 'react'
import ReactPlayer from 'react-player'


function bigVideo(props) {
    const big = props.big
    return (
            <div className="reactPlayr" >
                <ReactPlayer
                    playing={true}
                    // fixed-bottom
                    className='react-player '
                    url={`http://localhost:1337${big.video[0].url}`}
                    // url='/videos/video3.mp4'
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>
    )
}

export default bigVideo

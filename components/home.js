import React, { Component } from 'react'
import TopNews from '../components/Home2/topNews'
import Bunner from '../components/Home2/bunners'
import BetweenNews from './Home2/BetweenNews'
import TopReadNews from './Home2/topReadNews'
import VideoNews from '../components/Home2/HomeVideo'

export class homePar extends Component {
    render() {
        // console.log(this.props.VideoNews, 'nahisan lala')
        // console.log(this.props.homeVideo, 'lalallaadadadada')
        return (
            <>
                <TopNews AllNews={this.props.AllNews}  />
                <Bunner bunner2={this.props.bunner2}  />
                <BetweenNews HomeAudio={this.props.HomeAudio} HomeVideos={this.props.HomeVideos} AllNews={this.props.AllNews} />
                <VideoNews HomeVideos={this.props.HomeVideos} />
                <TopReadNews  Vbunner={this.props.Vbunner} Vbunner2={this.props.Vbunner2} AllNews={this.props.AllNews}  />
                {/* <HomeCon homeVideo={this.props.homeVideo} />
                <Slick VideoNews={this.props.VideoNews} />
                <MainNews myProp2={this.props.allData} />
                <AudioCon AuidoNews={this.props.AuidoNews} /> */}
            </>
        )
    }
}
export default homePar



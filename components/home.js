import React, { Component } from 'react'
import TopNews from '../components/Home2/topNews'
import Bunner from '../components/Home2/bunners'
import BetweenNews from './Home2/BetweenNews'
import TopReadNews from './Home2/topReadNews'


export class homePar extends Component {
    render() {
        // console.log(this.props.VideoNews, 'nahisan lala')
        // console.log(this.props.homeVideo, 'lalallaadadadada')
        return (
            <>
                <TopNews TopNews1={this.props.TopNews1} TopNews2={this.props.TopNews2} TopNews3={this.props.TopNews3} />
                <Bunner />
                <BetweenNews HomeVideos={this.props.HomeVideos} />
                <TopReadNews AllNews={this.props.AllNews}  />
                {/* <HomeCon homeVideo={this.props.homeVideo} />
                <Slick VideoNews={this.props.VideoNews} />
                <MainNews myProp2={this.props.allData} />
                <AudioCon AuidoNews={this.props.AuidoNews} /> */}
            </>
        )
    }
}
export default homePar


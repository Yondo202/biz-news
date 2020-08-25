import React, { Component } from 'react'
import HomeCon from './Home/HomeCon'
import Slick from './Home/newsSlick'
import AudioCon from './Home/newsCon'
import MainNews from '../components/Home/mainNews'
import Search from '../components/Home/search'


export class homePar extends Component {
    render() {
        // console.log(this.props.VideoNews, 'nahisan lala')
        // console.log(this.props.homeVideo, 'lalallaadadadada')
        return (
            <>
                <HomeCon homeVideo={this.props.homeVideo} />
                <Slick VideoNews={this.props.VideoNews} />
                <MainNews myProp2={this.props.allData} />
                <AudioCon AuidoNews={this.props.AuidoNews} />
                {/* <Search /> */}
            </>
        )
    }
}
export default homePar



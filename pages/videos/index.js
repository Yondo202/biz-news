import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HomeVideo from '../../components/Video/indexVideo'
import Head from 'next/head'
import axios from 'axios'



export class videoNews extends Component {
    render() {
        return (
            <div>

                <Head>
                    <title>Biz-Insider</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link      rel="stylesheet"       href="https://video-react.github.io/assets/video-react.css"           />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"></link>
                </Head>

                <Layout>
                    <HomeVideo allVideo={this.props.allVideo} />
                </Layout>
            </div>
        )
    }
}

export default videoNews


export async function getServerSideProps() {
    const MainNews = await axios('http://66.181.166.84:1337/videos');
    //  console.log(ctx.params.id,'heehehe')
    // let param = ctx.params.id
    return {
        props: {
            allVideo: MainNews.data
        }
    }
}
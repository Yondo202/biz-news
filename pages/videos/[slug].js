import React from 'react'
import axios from 'axios'
import Layout from '../../components/layout2'
import HomeVideo from '../../components/Video/HomeVideo'
import Head from 'next/head'


function Home(props) {
    return (
        <div>
            <div>

                <Head>
                    <title>Biz-Insider</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link
                        rel="stylesheet"
                        href="https://video-react.github.io/assets/video-react.css"
                    />

                </Head>

                <Layout>
                    <HomeVideo big={props.big} all={props.all} />
                    {/* keke */}
                </Layout>
            </div>
        </div>
    )
}

export default Home


export async function getServerSideProps(context) {
    const { slug } = context.query
    const VideoNews = await axios(`http://localhost:1337/videos?slug=${slug}`);
    const allData = await axios(`http://localhost:1337/videos`);
    //  const data = await VideoNews.json()
    return {
      props: {
        big: VideoNews.data[0],
        all: allData.data
      }
    }
  }
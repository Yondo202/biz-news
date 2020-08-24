import Head from 'next/head'
import Layout from '../components/Layout'
import HomePar from '../components/home'
import axios from 'axios'

export default function Home(props) {
  const newsData = props.MainNews
  // console.log(props.VideoNewsHome, 'lalala')
  return (
    <div>
      <Head>
        <title>Biz-Insider</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
      </Head>
      <>
        <Layout>
          <HomePar allData={newsData} VideoNews={props.VideoNewsHome} AuidoNews={props.AuidoNews} />
        </Layout >
      </>


    </div>
  )
}


export async function getServerSideProps(){
  const VideoNews = await axios(`http://localhost:1337/videos`);
   const MainNews = await axios(`http://localhost:1337/posts`);
   const AuidoNews = await axios(`http://localhost:1337/audio`);
  //  const data = await MainNews.json()
    return {props: {
        MainNews: MainNews.data,
        VideoNewsHome: VideoNews.data,
        AuidoNews: AuidoNews.data
    }}
}


import Head from 'next/head'
import Layout from '../components/Layout'
import HomePar from '../components/home'
import axios from 'axios'

export default function Home(props) {
  // const newsData = props.MainNews

  // console.log(props.VideoNewsHome, 'lalala')
  return (
    <div>
      <Head>
        <title>Biz-Insider</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"></link> */}
      </Head>
      <>
        <Layout AllNews={props.AllNews} bunner1={props.bunner1}>
          {/* <HomePar homeVideo={props.homeVideo} allData={newsData} VideoNews={props.VideoNewsHome} AuidoNews={props.AuidoNews} /> */}
          <HomePar TopNews1={props.TopNews1} TopNews2={props.TopNews2} TopNews3={props.TopNews3} AllNews={props.AllNews} HomeVideos={props.HomeVideos}  />
        </Layout >
      </>


    </div>
  )
}


export async function getServerSideProps(){
   const TopNews1 = await axios(`http://localhost:1337/posts?slug=top-1`);
   const TopNews2 = await axios(`http://localhost:1337/posts?slug=top-2`);
   const TopNews3 = await axios(`http://localhost:1337/posts?slug=top-3`);
  const AllNews = await axios(`http://localhost:1337/posts`);
  const HomeVideos = await axios(`http://localhost:1337/videos`);
  const bunner1 = await axios(`http://localhost:1337/Bunner-1`);
  // const bunner2 = await axios(`http://localhost:1337/Bunner-2`);
  // const Vbunner = await axios(`http://localhost:1337/video-bunner`);
    return {props: {
      TopNews1: TopNews1.data,
      TopNews2: TopNews2.data,
      TopNews3: TopNews3.data,
      AllNews: AllNews.data,
      HomeVideos: HomeVideos.data,
      bunner1: bunner1.data,
    }}
}

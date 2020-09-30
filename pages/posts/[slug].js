import Head from 'next/head'
import Layout from '../../components/layout2'
import HomePar from '../../components/home'
import axios from 'axios'
import MainNews from '../../components/mainNews/mainNews'
import BigNews from '../../components/mainNews/bigMain'

const imageURL = '';

export default function Home(props) {

  console.log(props.big, 'this is my big data')

  return (
    <div>
      <Head>
        <title>{props.big.title}</title>
        {/* <meta property="og:image" content={`%PUBLIC_URL%/${props.big.image.url}`}></meta> */}
        <meta property="og:description" content='hahahahha' />
        {/* <meta property="og:image" content={props.big.image.url}></meta> */}
        <meta property="og:image:secure_url" content={props.big.image.url}></meta>
        <meta property="og:image" content={imageURL!==''?`${props.big.image.url}`: ''} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <>
        <Layout>
          <MainNews big={props.big} all={props.all} />
        </Layout>
      </>

    </div>
  )
}


export async function getServerSideProps(context) {
  const { slug } = context.query
  const MainNews = await axios(`https://biz-admin.herokuapp.com/posts?slug=${slug}`);
  const allData = await axios(`https://biz-admin.herokuapp.com/posts`);
  //  const data = await MainNews.json()
  return {
    props: {
      big: MainNews.data[0],
      all: allData.data
    }
  }
}
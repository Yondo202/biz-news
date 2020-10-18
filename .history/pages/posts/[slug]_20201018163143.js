import Head from 'next/head'
import Layout from '../../components/Layout'
import HomePar from '../../components/home'
import axios from 'axios'
import MainNews from '../../components/mainNews/mainNews'
import BigNews from '../../components/mainNews/bigMain'
import { GetStaticPaths } from 'next'
import { execOnce } from 'next/dist/next-server/lib/utils'
import ReactGa from 'react-ga';
import {useEffect} from 'react'
const imageURL = '';



export default function Home(props) {

  console.log(props.big, 'this is my big data')

  useEffect(() => {
    ReactGa.initialize('UA-180671141-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
 }, [])

  return (
    <div>
      <Head>
        <title>{props.big.title}</title>
        <meta name="description" content="hahahahha" />
        <meta property="og:image" content={`%PUBLIC_URL%/${props.big.image.url}`}></meta>
        <meta property="og:description" content='hahahahha' />
        <meta property="og:image" content={props.big.image.url}></meta>
        <meta property="og:image:secure_url" content={props.big.image.url}></meta>
        {/* <meta property="og:image" content={imageURL !== '' ? `${props.big.image.url}` : ''} /> */}
        <link rel="icon" href="/business.png" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <>
        <Layout AllNews={props.all}>
          <MainNews big={props.big} all={props.all} />
        </Layout>
      </>

    </div>
  )
}



export const getStaticPaths = async () => {
  const allData = await axios.get(
    `https://biz-admin.herokuapp.com/posts`
  );
  const parks = allData.data;

  const paths = parks.map((allDatas) => ({
    params: { slug: allDatas.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const MainNews = await axios.get(
    `https://biz-admin.herokuapp.com/posts?slug=${params.slug}`
  );
  const allData = await axios(`https://biz-admin.herokuapp.com/posts`);
  console.log(MainNews, 'дэдэдэдэ')
  return {
    props: {
      big : MainNews.data[0],
      all: allData.data
    },
    revalidate: 1
  };
};


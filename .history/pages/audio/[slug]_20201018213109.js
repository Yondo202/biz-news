import Head from 'next/head'
import Layout from '../../components/Layout'
import HomePar from '../../components/home'
import axios from 'axios'
import Aduios from '../../components/audio/Audio'
import ReactGa from 'react-ga';
import { useEffect } from 'react'

export default function Home(props) {

  useEffect(() => {
    ReactGa.initialize('UA-180671141-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  const router = useRouter()
    const myRoute = router.query.slug
  // console.log(props.test, 'cscd')
  return (
    <div>
      <Head>
        <title>{props.big.title}</title>
        <link rel="icon" href="/business.png" />
        <meta property="og:title" content={props.big.title} />
        <meta name="description" content={props.big.title} />
        <meta property="og:description" content={props.big.title} />
        <meta property="og:image" content={props.big.image.url}></meta>
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2645260245750776" />
        <meta property="og:url" content={`https://biznet-news.vercel.app/posts/${myRoute}`} />
        <meta property="og:site_name" content="BIZI.mn" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <>
        <Layout AllNews={props.all}>
          <Aduios big={props.big} all={props.all} />
        </Layout>
      </>


    </div>
  )
}


export const getStaticPaths = async () => {
  const allData = await axios.get(
    `https://biz-admin.herokuapp.com/audio`
  );
  const parks = allData.data;

  const paths = parks.map((allDatas) => ({
    params: { slug: allDatas.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const audioNews = await axios.get(
    `https://biz-admin.herokuapp.com/audio?slug=${params.slug}`
  );
  const allData = await axios(`https://biz-admin.herokuapp.com/audio`);
  console.log(audioNews, 'дэдэдэдэ')
  return {
    props: {
      big: audioNews.data[0],
      all: allData.data
    },
    revalidate: 1
  };
};



// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   const audioNews = await axios(`https://biz-admin.herokuapp.com/audio?slug=${slug}`);
//   const allData = await axios(`https://biz-admin.herokuapp.com/audio`);
//   //  const data = await audioNews.json()
// //   console.log(id)
//   return {
//     props: {
//       big: audioNews.data[0],
//       all: allData.data
//     }
//   }
// }

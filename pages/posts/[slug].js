import Head from 'next/head'
import Layout from '../../components/Layout'
import HomePar from '../../components/home'
import axios from 'axios'
import MainNews from '../../components/mainNews/mainNews'
import BigNews from '../../components/mainNews/bigMain'
import { GetStaticPaths } from 'next'
import { execOnce } from 'next/dist/next-server/lib/utils'
import ReactGa from 'react-ga';
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home(props) {

  console.log(props.big, 'this is my big data')

  useEffect(() => {
    ReactGa.initialize('UA-180671141-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  const router = useRouter()
  const myRoute = router.query.slug
  // console.log(myRoute, ' this is my router shuu')

  return (
    <div>
      <Head>
        <title>{props.big.title}</title>
        <meta property="og:title" content={props.big.title} />
        <meta name="description" content={props.big.title} />
        <meta property="og:description" content={props.big.title} />
        <meta property="og:image" content={props.big.image.url}></meta>
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2645260245750776" />
        <meta property="og:url" content={`https://biznet-news.vercel.app/posts/${myRoute}`} />
        <meta property="og:site_name" content="BIZI" />
        {/* <meta property="og:image" content={props.big.image.url}></meta> */}
        {/* <meta property="og:image" content={`%PUBLIC_URL%/${props.big.image.url}`}></meta> */}
        {/* <meta property="og:image:secure_url" content={props.big.image.url}></meta> */}
        {/* <meta property="og:image" content={imageURL !== '' ? `${props.big.image.url}` : ''} /> */}



        <link rel="icon" href="/business.png" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="dist/shareSelectedText.min.css"/>
      </Head>
      <>
        <Layout AllNews={props.all}>
          <MainNews Vbunner={props.Vbunner} Vbunner2={props.Vbunner2} big={props.big} all={props.all} />
        </Layout>
      </>

    </div>
  )
}


// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   const VideoNews = await axios(`https://biz-admin.herokuapp.com/posts?slug=${slug}`);
//   const allData = await axios(`https://biz-admin.herokuapp.com/posts`);
//   const Vbunner = await axios(`https://biz-admin.herokuapp.com/video-bunner`);
//   const Vbunner2 = await axios(`https://biz-admin.herokuapp.com/video-bunner-2`);
//   //  const data = await VideoNews.json()
//   return {
//       props: {
//           big: VideoNews.data[0],
//           all: allData.data,
//           Vbunner : Vbunner.data,
//           Vbunner2 : Vbunner2.data

//       }
//   }
// }


// // pages/blog/[slug].js
// export async function getStaticProps({ params }) {
//   const post = await getBlogPostBySlug(params.slug);
//   console.log(post, ' this is my slug shuuu')
//   return {
//     // Set the timeout for generating to 1 second
//     // This timeout could be longer depending on how often data changes
//     revalidate: 1,
//     props: {
//       post,
//     },
//   };
// }







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
  const Vbunner = await axios(`https://biz-admin.herokuapp.com/video-bunner`);
  const Vbunner2 = await axios(`https://biz-admin.herokuapp.com/video-bunner-2`);
  console.log(MainNews, 'дэдэдэдэ')
  return {
    props: {
      big: MainNews.data[0],
      all: allData.data,
      Vbunner : Vbunner.data,
      Vbunner2 : Vbunner2.data
    },
    revalidate: 1
  };
};


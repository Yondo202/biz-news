import React from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import HomeVideo from '../../components/Video/HomeVideo'
import Head from 'next/head'


function Home(props) {
    return (
        <div>
            <div>

                <Head>
                    <title>{props.big.title}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link
                        rel="stylesheet"
                        href="https://video-react.github.io/assets/video-react.css"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
                </Head>

                <Layout AllNews={props.all}>
                    <HomeVideo big={props.big} all={props.all} />
                    {/* keke */}
                </Layout>
            </div>
        </div>
    )
}

export default Home


export const getStaticPaths = async () => {
    const allData = await axios.get(
        `https://biz-admin.herokuapp.com/videos`
    );
    const parks = allData.data;
  
    const paths = parks.map((allDatas) => ({
      params: { slug: allDatas.slug },
    }));
  
    return { paths, fallback: false };
  };
  
  export const getStaticProps = async ({ params }) => {
    const VideoNews = await axios.get(
      `https://biz-admin.herokuapp.com/videos?slug=${params.slug}`
    );
    const allData = await axios(`https://biz-admin.herokuapp.com/videos`);
    console.log(VideoNews, 'дэдэдэдэ')
    return {
      props: {
        big : VideoNews.data[0],
        all: allData.data
      },
      revalidate: 1
    };
  };
  

// export async function getServerSideProps(context) {
//     const { slug } = context.query
//     const VideoNews = await axios(`https://biz-admin.herokuapp.com/videos?slug=${slug}`);
//     const allData = await axios(`https://biz-admin.herokuapp.com/videos`);
//     //  const data = await VideoNews.json()
//     return {
//         props: {
//             big: VideoNews.data[0],
//             all: allData.data
//         },
//         revalidate: 1
//     }
// }


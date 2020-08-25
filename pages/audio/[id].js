import Head from 'next/head'
import Layout from '../../components/Layout'
import HomePar from '../../components/home'
import axios from 'axios'
import Aduios from '../../components/audio/Audio'


export default function Home(props) {
  // console.log(props.test, 'cscd')
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
          <Aduios big={props.big} all={props.all}  />
        </Layout>
      </>


    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const audioNews = await axios(`http://66.181.166.84:1337/audio?id=${id}`);
  const allData = await axios(`http://66.181.166.84:1337/audio`);
  //  const data = await audioNews.json()
  console.log(id)
  return {
    props: {
      big: audioNews.data[0],
      all: allData.data
    }
  }
}




// export async function getServerSideProps(ctx) {
//   console.log(ctx.params.id, 'heehehe')
//   return {
//     props: {
//       test: 'hehe'
//     }
//   }
// }
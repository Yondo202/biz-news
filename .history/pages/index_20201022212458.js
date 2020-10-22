import Head from 'next/head'
import ReactGa from 'react-ga';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Background } from 'react-parallax';

export default function Home(props) {

    useEffect(() => {
        ReactGa.initialize('UA-180671141-1')
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    const router = useRouter()
    const myRoute = router.query.slug
    return (
        <div>
            <Head>
                <title>BIZI.mn</title>
                <meta name="description" content="Завгүй хүмүүст зориулав. Бизнесийн болон бусад мэдээллийг нэг дороос." />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="2645260245750776" />
                <meta property="og:url" content={`https://biznet-news.vercel.app`} />
                <meta property="og:site_name" content="BIZI.mn" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>

                <link rel="stylesheet" href="dist/shareSelectedText.min.css" />
            </Head>
            <div className="ComingParent" style={{
                backgroundImage: "url(" + `${require("../components/image/bizi.png")}` + ")", backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width:'100vw',
                height: '100vh'
            }}>
                <div className="background">

                </div>
                <div className="ComingParentchild">
                    <div className="imageAmiluulagch">
                     <img src={require('../components/image/bizi.png')}></img>
                    </div>
                    <h1>Тун удахгүй...</h1>
                </div>
            </div>
        </div>
    )
}








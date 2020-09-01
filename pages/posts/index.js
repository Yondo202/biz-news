import React, { Component } from 'react'
import Head from 'next/head'

import Layout from '../../components/layout2'
import MainNews from '../../components/mainNews/mainNews'
import Index from '../../components/mainNews/indexNews'

import axios from 'axios'

export class news extends Component {
    render() {
        // console.log(this.props.test)
        return (
            <>
                <Head>
                    <title>Biz-Insider</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                </Head>

                <Layout>
                    <Index allPost={this.props.allPost} />
                </Layout>
            </>

        )
    }
}

export default news


export async function getServerSideProps(){
    const MainNews = await axios('http://localhost:1337/posts');
    //  console.log(ctx.params.id,'heehehe')
     // let param = ctx.params.id
     return {props: {
         allPost: MainNews.data
     }}
 }
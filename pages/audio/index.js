import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout2'
import Audio from '../../components/audio/indexAudio'
import axios from 'axios'


export class audio extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Biz-Insider</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet" />
                </Head>
                <Layout>
                    <Audio MainAudio={this.props.allPost} />
                </Layout>
            </>

        )
    }
}

export default audio

export async function getServerSideProps(){
    const MainAudio = await axios('https://biz-admin.herokuapp.com/audio');
    //  console.log(ctx.params.id,'heehehe')
     // let param = ctx.params.id
     return {props: {
         allPost: MainAudio.data
     }}
 }
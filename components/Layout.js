import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import OtherNav from '../components/otherNav'

function Layout(props) {
    return (
        <>
            <OtherNav AllNews={props.AllNews} bunner1={props.bunner1} Logo={props.Logo} />
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout

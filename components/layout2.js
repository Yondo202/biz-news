import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Layout2(props) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout2

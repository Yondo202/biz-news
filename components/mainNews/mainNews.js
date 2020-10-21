import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-bootstrap';
import BigMain from './bigMain'
import Allmain from './allMain'
import ScrollToTop from "react-scroll-to-top";


function mainNews(props) {
    // const router = useRouter();
    // const myRoute = router.query.slug
    // console.log(myRoute, ' this is my router shuu')
    return (
        <div className="BackMainNewsPar">
            <ScrollToTop smooth />
            <Container className="containers" fluid >
                <Row style={{ marginTop: 20, position:'relative' }}>
                    < BigMain big={props.big} />
                    <Allmain small={props.all} />
                </Row>
            </Container>
        </div>
    );
}

export default mainNews;

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from 'axios'



function HomeCon() {

    return (
        <div className="test">
            <section className="homeVide"
                style={{
                    position: `relative`,
                    height: `100%`,
                    height: `-moz-available`,
                    height: `-webkit-fill-available`,
                    height: `fill-available`,
                    minHeight: `100vh`,
                    width: `100%`,
                    zIndex: `1`,
                    overflow: `hidden`,
                }}
            >
                <div className="background">
                    <h1>Бүх төрлийн бизнэс мэдээ мэдээллийг нэг дороос</h1>
                    <Link href="/posts">
                        <button type="button">Цааш ...</button>
                    </Link>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: `absolute`,
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(-50%,-50%)`,
                        width: `auto`,
                        height: `auto`,
                        minHeight: `100%`,
                        minWidth: `100%`,
                    }}
                >
                    <source src='/videos/back1.mp4' type="video/mp4" />
                </video>
            </section>



            {/* <div className="par">
                <div className="child1">child1</div>
                <div className="child2">child2</div>
                <div className="child3">child3</div>
                <div className="child4">child4</div>
            </div> */}

        </div>
    )
}

export default HomeCon


















// import React, { Component } from 'react'
// import Link from 'next/link';

// export class HomeCon extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videoURL: '/videos/back1.mp4'
//         }
//     }
//     render() {
//         return (
//             <  >

//                 <section className="homeVide"
//                     style={{
//                         position: `relative`,
//                         height: `100%`,
//                         height: `-moz-available`,
//                         height: `-webkit-fill-available`,
//                         height: `fill-available`,
//                         minHeight: `100vh`,
//                         width: `100%`,
//                         zIndex: `1`,
//                         overflow: `hidden`,
//                     }}
//                 >
//                     <div className="background">
//                         <h1>Бүх төрлийн бизнэс мэдээ мэдээллийг нэг дороос</h1>
//                         <Link href="/posts">
//                             <button type="button">Цааш ...</button>
//                         </Link>
//                         <div className="searchPAr">
//                             <input placeholder="search" />
//                             <button>Search Btn</button>
//                         </div>
//                     </div>
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         style={{
//                             position: `absolute`,
//                             left: `50%`,
//                             top: `50%`,
//                             transform: `translate(-50%,-50%)`,
//                             width: `auto`,
//                             height: `auto`,
//                             minHeight: `100%`,
//                             minWidth: `100%`,
//                         }}
//                     >
//                         <source src={this.state.videoURL} type="video/mp4" />
//                     </video>
//                 </section>
//             </>
//         )
//     }
// }

// export default HomeCon

import React, { Component } from 'react'
import Link from 'next/link';
// import logo from '../image/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosMenu } from 'react-icons/io'
import HamburgerMenu from 'react-hamburger-menu'
import { useRouter } from 'next/router'

export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: '',
            className: "headPar",
            color: 'white'
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.pageYOffset > 1) {

            this.setState({ className: "scrollDown", color: "black" });
        } else {
            this.setState({ className: "headPar",color: "white"  });

        }
        // console.log('lalalall', window.pageYOffset)
    }



    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className="Headerghost">
                <div ref={(r) => this.ref = r} className={this.state.className} >
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkBtn">
                        {/* <IoIosMenu /> */}
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={32}
                            height={15}
                            strokeWidth={2}
                            rotate={0}
                            color={this.state.color}
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </label>
                    <div className="logo">
                        <Link href="/">
                            <img src={require('../components/image/logo.png')} />
                        </Link>
                        {/* <img src={logo}  alt="MyPhoto" id="logo"/> */}

                    </div>
                    <ul className="menu">
                        <Link href="/">
                            <li><a className="active">Нүүр</a><div className="line"></div></li>
                        </Link>
                        <Link href="/posts">
                            <li><a >News</a><div className="line"></div></li>
                        </Link>
                        <Link href="/videos">
                            <li><a >Video news</a><div className="line"></div></li>
                        </Link>
                        <Link href="/audio/[id]" as={`/audio/3`}>
                            <li><a >Audio news</a><div className="line"></div></li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav




// const nav = () => {
// handleClick() {
//         this.setState({
//             open: !this.state.open
//         });
//     }

//     return (

//         <div className="Headerghost">
//             <div className="headPar" >
//                 <input type="checkbox" id="check" />
//                 <label for="check" className="checkBtn">
//                     {/* <IoIosMenu /> */}
//                     <HamburgerMenu
//                         isOpen={this.state.open}
//                         menuClicked={this.handleClick.bind(this)}
//                         width={18}
//                         height={15}
//                         strokeWidth={1}
//                         rotate={0}
//                         color='black'
//                         borderRadius={0}
//                         animationDuration={0.5}
//                     />
//                 </label>
//                 <div className="logo">
//                     <Link href="/">
//                         <img src={require('../components/image/logo.png')} />
//                     </Link>
//                     {/* <img src={logo}  alt="MyPhoto" id="logo"/> */}
//                 </div>
//                 <ul className="menu">
//                     <Link href="/">
//                         <li><a className="active">Нүүр</a><div className="line"></div></li>
//                     </Link>
//                     <Link href="/news">
//                         <li><a >News</a><div className="line"></div></li>
//                     </Link>
//                     <Link href="/videoNews">
//                         <li><a >Video news</a><div className="line"></div></li>
//                     </Link>
//                     <Link href="/audio">
//                         <li><a >Audio news</a><div className="line"></div></li>
//                     </Link>
//                     <li><a >Give Away</a><div className="line"></div></li>
//                 </ul>
//             </div>
//         </div>
//     )

// };

// export default nav;

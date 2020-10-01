import React, { Component } from 'react'
import Link from 'next/link';
import OtherNav from './otherNav'
// import logo from '../image/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosMenu } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import HamburgerMenu from 'react-hamburger-menu'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import SearchBtn from '../components/search'


export class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: '',
            className: "TopestHeader",
            color: 'white',
            search: '',
            style: 'none'
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 189) {

            this.setState({ className: "TopestHeader2" });
            this.setState({ style: "block" });
        } else {
            this.setState({ className: "TopestHeader" });
            this.setState({ style: "none" });

        }
        console.log('lalalall', window.pageYOffset)
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <>
            <div className="Ghost" style={{width:"100%", height:50, backgroundColor:"white", display:`${this.state.style}`}}></div>
                <div className={this.state.className} >
                    {/* <OtherNav AllNews={this.props.AllNews} bunner1={this.props.bunner1} />s */}
                    <div className="Headerghost">
                        <Container>
                            <div ref={(r) => this.ref = r} className="scrollDown" >
                                <input type="checkbox" id="check" />
                                <ul className="menu">
                                    <Link href="/">
                                        <div className="homeMenu">
                                            <div>
                                                <FaHome />
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/">
                                        <div className="li">
                                            <span className="active">Нүүр</span><div className="line ln1"></div>
                                        </div>
                                    </Link>
                                    <Link href="/posts">
                                        <div className="li">
                                            <span >News</span><div className="line ln2"></div>
                                        </div>
                                    </Link>
                                    <Link href="/videos">
                                        <div className="li">
                                            <span >Video news</span><div className="line ln3"></div>
                                        </div>
                                    </Link>
                                    <Link href="/audio">
                                        <div className="li">
                                            <span >Podcast</span><div className="line ln4"></div>
                                        </div>
                                    </Link>
                                </ul>
                                <div className="searchInp">
                                    {/* <input type="input" placeholder="Хайх" /> */}
                                    <SearchBtn AllNews={this.props.AllNews} />
                                    {/* <SearchBtn /> */}
                                    <div className="icon">
                                        <FaSearch />
                                    </div>
                                </div>


                                <label for="check" className="checkBtn">
                                    {/* <IoIosMenu /> */}
                                    <HamburgerMenu
                                        isOpen={this.state.open}
                                        menuClicked={this.handleClick.bind(this)}
                                        width={32}
                                        height={15}
                                        strokeWidth={2}
                                        rotate={0}
                                        // color={this.state.color}
                                        color="white"
                                        borderRadius={0}
                                        animationDuration={0.5}
                                    />
                                </label>
                            </div>
                        </Container>
                    </div>
                </div>
            </>


        )
    }
}

export default Nav




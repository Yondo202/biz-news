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
            className: "headPar",
            color: 'white',
            search: '',
            selectedContent: newsData[0]
        }
    }


    setSearch = (e) => {
        this.setState({ search: e.target.value });
    }
    clickHandler = (e) => {
        console.log(e.target, 'heey');
        this.setState({ selectedContent: newsData[e.target.tabIndex] })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 1) {

            this.setState({ className: "scrollDown", color: "black" });
        } else {
            this.setState({ className: "headPar", color: "black" });

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
            <div className="TopestHeader" >
                {/* <OtherNav AllNews={this.props.AllNews} bunner1={this.props.bunner1} />s */}
                <div className="Headerghost">
                    <Container>
                        <div ref={(r) => this.ref = r} className="scrollDown" >
                            <input type="checkbox" id="check" />

                            {/* <div className="logo">
                        <Link href="/">
                            <img src={require('../components/image/logo.png')} />
                        </Link>
                    </div> */}
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
                                <input type="input" placeholder="Хайх" />
                                {/* <SearchBtn AllNews={this.props.AllNews} /> */}
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

        )
    }
}

export default Nav



const newsData = [
    {
        title: 'ШОРОНГИЙН ДУУЛИАНААР АМЖУУЛСАН ХУУЛЬ БУС ТОМИЛГОО',
        desc: 'Ерөнхий сайд У.Хүрэлсүх “Надаас болон миний тэргүүлсэн Засгийн газраас хууль бус зүйл битгий хүсээрэй, хууль бус зүйл хийлгэх гэж битгий шахаж шаардаарай. Би зөвхөн хуулинд захирагдаж ажиллах',
        date: '2019.05.10',
        img: require('./image/news.jpg')
    },
    {
        title: ' АНУ МАНЛАЙЛЛАА ГЕРМАНД АЛДЖЭЭ',
        desc: '11Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
        date: '2019.05.11',
        img: require('./image/slider2.jpg')
    },
    {
        title: 'КИМ ЖОН УН ТОМ СОРИЛТЫН ӨМНӨ ИРЭЭД БАЙНА',
        desc: 'Хойд Солонгосын үе үеийн удирдагч нар хэдэн арван жилийн турш улс эх орноо гаднын ертөнцөөс, капиталистууд, АНУ эсвэл бусад дайсагнасан хүчинүүдээс хамгаална гэсэн үзэл баримтлал',
        date: '2016.01.10',
        img: require('./image/slider2.jpg')
    },
    {
        title: 'УОК сургууль, цэцэрлэгийг нээх эсэхийг хэлэлцэнэ',
        desc: 'Одоогоор дэлхий даяар 150 гаруй лаборатори, сургууль эмнэлэг коронавирусийн эсрэг вакцин бүтээхээр ажиллаж байгаа ба үүний 20 гаруй нь хүн дээр турших туршилтаа эхлүүлээд',
        date: '2016.01.10',
        img: require('./image/slider2.jpg')
    },
    {
        title: 'Улсын онцгой комиссын шийдвэрээр энэ сард үйлдэх тусгай нислэгийг нэмэгдүүлж 14 нислэгээр',
        desc: '22Think You’re Cut Out for Doing political? Take This Quiz. There are many variations of passages of have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable',
        date: '2016.01.10',
        img: require('./image/slider2.jpg')
    }
]



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

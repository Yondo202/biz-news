import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import axios from 'axios'
import {BsSearch} from 'react-icons/bs'



const Auto = () => {
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState('')
    const [path, setPath] = useState('/posts')

    const wrapperRef = useRef(null);

    console.log(options, 'my Options ')
    useEffect(() => {
        const allData = []

        const MainPosts = new Array(3).fill().map((e, i) => {
            axios.get(`http://66.181.166.84:1337/posts?id=${i + 1}`).then((res) => {
                // console.log(res.data, 'this my data')
                allData.push(res.data[0]);
            }).catch((error) => {
                console.log(error)
            })
        });

        // const videoNews = new Array(6).fill().map((e, i) => {
        //     axios.get(`http://localhost:1337/videos?id=${i + 1}`).then((res) => {
        //         console.log(res.data, 'this my data')
        //         allData.push(res.data[0]);
        //     }).catch((error) => {
        //         console.log(error)
        //     })
        // });

        console.log(allData, 'this is my data All')

        setOptions(allData)
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false)
        }
    }

    const setDataDex = news => {
        setSearch(news);
        setDisplay(false)
    };

    // console.log(options, ' lalalalasdadadadada')
    return (
        <div className="searchPAr">
            <input
                value={search}
                onClick={() => setDisplay(!display)}
                placeholder="search... "
                onChange={(e) => setSearch(e.target.value)}
            // onClick={() => setSearch(!display)}
            />
            <BsSearch />

            {display && (
                <div className="ResultPar" ref={wrapperRef} >
                    {options.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1).map((el, i) => {
                        return (
                            <div key={i}
                                onClick={() => setDataDex(el.title)}
                                tabIndex={i}

                            >
                                {/* {el.slug == `post=${i + 1}` ? () => setPath('/posts') : () => setPath('/videos')} */}

                                <Link href={`${path}/[slug]`} as={`${path}/${el.slug}`} >
                                    {!search ? '' : (
                                        <div className="resCon">
                                            <img src={`http://66.181.166.84:1337${el.photos[0].url}`} />
                                            <h6 className="title" >{el.title}</h6>
                                        </div>
                                    )
                                    }
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )}

        </div>
    )
}


function search() {
    return (
        <Auto />
    )
}

export default search
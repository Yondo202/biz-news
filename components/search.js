import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { scale: 0.2, transition: { duration: 0.9, ease: easing } },
    enter: {
        scale: 1,
        transition: { delay: 0, duration: 1, ease: easing }
    }
};

function search(props) {
    console.log(props.AllNews, 'niahahah')

    // state = {
    //     services: []
    // }


    const Auto = () => {
        const [display, setDisplay] = useState(false)
        const [options, setOptions] = useState([])
        const [search, setSearch] = useState('')
        const [path, setPath] = useState('/posts')

        const wrapperRef = useRef(null);

        console.log(options, 'my Options ')
        useEffect(() => {
            // const MainPosts = axios.get(`https://biz-admin.herokuapp.com/posts`).then((res) => {
            //     console.log(res.data, 'this my data')
            //     allData.push(res.data);
            // }).catch((error) => {
            //     console.log(error)
            // })


            const allData = [];


            // console.log(props.AllNews, 'this is my data All')
            // console.log(allData, 'this is my data All')

            setOptions(props.AllNews)
            // setOptions(allData);
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
            <div className='searchPAr'>
                <input
                    value={search}
                    onClick={() => setDisplay(!display)}
                    placeholder="Хайх... "
                    onChange={(e) => setSearch(e.target.value)}
                // onClick={() => setSearch(!display)}
                />
                {/* <BsSearch /> */}
                {display && (
                    <motion.div style={{ zIndex: "99" }} initial="exit" animate="enter" exit="exit" variants={textVariants}>
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
                                                    <img src={el.image.url} />
                                                    <h6 className="title" >{el.title}</h6>
                                                </div>
                                            )
                                            }
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>

                )}

            </div>
        )
    }
    return (
        <Auto />
    )
}

export default search 
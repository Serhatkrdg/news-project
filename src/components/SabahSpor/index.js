import {React, useEffect, useState} from 'react'
import './index.css'

export const SabahSpor = () => {
    const [sabahNews, setSabahNews]  = useState ([])

    useEffect(() => {
        fetch("https://www.sabah.com.tr/rss/spor.xml")
        .then((res) => res.text())
        .then((data) => {
            debugger;
            const parser = new DOMParser();
            const feed = parser.parseFromString(data, "application/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML.substring(0, el.querySelector("title").innerHTML.length - 3).slice(9),
                description: el.querySelector("description").innerHTML.slice(el.querySelector("description").innerHTML.indexOf('<br />') + 6).split('<a')[0],
              }));
              setSabahNews(feedItems);
              console.log(data)
        })
    }, [])
    
return(
    <div className=' flex flex-col'>
        <div className=' m-8 items-center text-center'>
       <h1 className=' font-bold p-4 text-orange-400'>Sabah Spor Haberleri</h1>
        </div>
        <div className=''>
            {sabahNews.map((e) => {
            return (
            <div className=' flex flex-col'>
            <div className=' text-blue-400 ml-3 mt-6'>{e.title}</div>
            <div className=' text-sky-200 ml-5'>{e.description}</div>
            <br />
            <hr className='hr-news'/>
            </div>
            )
        })}
       </div>
    </div>
    )
}
            

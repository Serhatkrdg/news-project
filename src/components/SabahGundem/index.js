import {React, useState, useEffect} from 'react'
import './index.css'

export const SabahGundem = () => {
    const [sabahGundemNews, setSabahGundemNews]  = useState ([])

    useEffect(() => {
        fetch("https://www.sabah.com.tr/rss/gundem.xml")
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
              setSabahGundemNews(feedItems);
              console.log(data)
        })
    }, [])
    
return(
    <div className=' flex flex-col'>
        <div className=' m-8 items-center text-center'>
       <h1 className=' font-bold p-4 text-orange-400'>Sabah Gundem Haberleri</h1>
        </div>
        <div className=''>
            {sabahGundemNews.map((e) => {
            return (
            <div className=' flex flex-col'>
            <div className=' text-blue-300'>{e.title}</div>
            <div className=' text-sky-200'>{e.description}</div>
            <br />
            <hr  className='hr-news'/>
            </div>
            )
        })}
       </div>
    </div>
)
}


export default SabahGundem
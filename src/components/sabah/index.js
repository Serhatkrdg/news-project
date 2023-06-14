import {React, useEffect, useState} from 'react'

export const Sabah = () => {
    const [sabahNews, setSabahNews] = useState ([]);

    useEffect (() => {
        fetch("https://www.sabah.com.tr/rss/spor.xml")
        .then(res => res.text())
        .then((sabahNews) => console.log(sabahNews))
    })

        {
        sabahNews.map((e) => {
            return(
                <div>{e.kategori}</div>
            )
        })
        }

}

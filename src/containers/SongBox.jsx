import React, { useState, useEffect } from 'react'
import SongList from '../components/SongList';

const SongBox = () => {
    const[songs, setSongs] = useState([]);

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then((data) => {setSongs(data.feed.entry)
            console.log(data.feed.entry)})
    }

    useEffect(() => {
        getSongs();
    }, [])

    return (
        <>
        <h2>This is the UK Top 20</h2>
        {songs ? <SongList songs={songs}/> : null}

        </>
    )
}

export default SongBox

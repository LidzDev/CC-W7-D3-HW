import Song from "./Song";

const SongList = ({songs}) => {
    const songItems = songs.map((song) => {
        return <Song song={song}/>

    })
    return (
        <>
        <h3>The Song List goes here</h3>
        <ol>
        {songItems}
        </ol>
        </>
    )
}

export default SongList;
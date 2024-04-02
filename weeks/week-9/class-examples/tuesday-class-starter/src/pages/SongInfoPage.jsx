import { useParams } from "react-router-dom";
import songsData from "../data/songs.json";

export const SongInfoPage = () => {
  // we are going to destrcutture the paramater that we need
  const { songTitle } = useParams();

  const songInfo = songsData.songs.find(
    (song) => song.title.toLowerCase().replace(/ /g, "-") === songTitle
  );

  if (!songInfo) return <p>Song not found!</p>;

  return (
    <>
      <div>
        <h5>Title</h5>
        <p>{songInfo.title}</p>
        <h5>Artist</h5>
        <p>{songInfo.artist}</p>
        <h5>Year</h5>
        <p>{songInfo.year}</p>
        <h5>Album Name</h5>
        <p>{songInfo.album}</p>
        <h5>Song Title coming form the URL</h5>
        <h6>
          We use the useParams() hook to destructure the 'song title' from the
          url and then use some conditional logic in the 'songInfo' variable to
          match the title from the url with the title from the json object, if
          there is a match! we go aahead and print te data if not, wer execute
          line 12
        </h6>
        <p> {songTitle}</p>
      </div>
    </>
  );
};

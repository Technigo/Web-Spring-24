import { SongList } from "../components/SongList";
export const HomePage = () => {
  return (
    <>
      <h2>
        This page is constructed using a React Component that links to a page
        containing the song info displayed dynamically.
      </h2>
      <SongList />
    </>
  );
};

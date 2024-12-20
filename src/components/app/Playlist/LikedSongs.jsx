import "./Playlist.scss";
import { IoPlayCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import List from "../../UI/List";
import { replaceQueue } from "../../../store/reducers/queue";

const Playlist = () => {
  const likedSongs = useSelector((state) => state.user.data.likedSongs);
  const dispatch = useDispatch();

  const replaceQueueHandler = (songs) => {
    dispatch(replaceQueue({ songs }));
  };

  return (
    <>
      {likedSongs ? (
        <div className="playlist likedSongs">
          <div className="playlist__header">
            <div>
              <h1 className="playlist__name">Liked Songs</h1>
              <div className="playlist__user">
                <span>You have {likedSongs.length} songs</span>
              </div>
            </div>
          </div>

          <div className="playlist__nav">
            <IoPlayCircle onClick={() => replaceQueueHandler(likedSongs)} />
          </div>

          <div className="playlist__songs">
            <List list={likedSongs} />
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Playlist;

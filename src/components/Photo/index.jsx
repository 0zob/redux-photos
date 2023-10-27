import {
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../store/reducers/photo";
import "./index.css";


export function Photo({ id, userIcon, title, src, like, user }) {
  const dispach = useDispatch();
  return (
    <div className="photo-container">
      <div className="user-row-container">
        <img className="user-icon" src={userIcon} alt="" />
        <h2>{user}</h2>
      </div>
      <div>
        <img className="photo-image" src={src} alt="user photo" />
        <div className="photo-bottom">
          {like ?
            <AiFillHeart size={24} onClick={() => dispach(toggleLike(id))} /> :
            <AiOutlineHeart size={24} onClick={() => dispach(toggleLike(id))} />
          }
          <BiSolidDownload size={24} />
        </div>
      </div>
      <p className="photo-title">{title}</p>
    </div>
  );
}

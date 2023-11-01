import reduxPhotosLogo from "../../assets/reduxphotos_logo.svg";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import "./index.css";
import { useDispatch } from "react-redux";
import { toggleShowOnlyLike } from "../../store/ui/sideMenu";
import { useSelector } from "react-redux";

export function SideMenu() {
  const dispach = useDispatch();
  const showOnlyLikes = useSelector(state => state.sideMenu.showOnlyLikes);
  return (
    <aside>
      <img className="aside__logo" src={reduxPhotosLogo} alt="redux Photos Logo" />
      <nav>
        <ul className="link-list">
          <li className="link-list__item">
            <button style={{ color: !showOnlyLikes ? "#120a8f" : "black"}} onClick={() => dispach(toggleShowOnlyLike())} className="link-list__tab-button"><AiFillHome size={24} /> Home</button>
          </li>
          <li>
            <button style={{ color: showOnlyLikes ? "#120a8f" : "black"}} onClick={() => dispach(toggleShowOnlyLike())} className="link-list__tab-button"><AiFillHeart size={24} />Liked</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

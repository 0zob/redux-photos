import { useSelector } from "react-redux";
import { Photo } from "../../components/Photo";
import "./index.css";
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const photos = useSelector(state => state.photo);
  const showOnlyLikes = useSelector(state => state.sideMenu.showOnlyLikes);
  return (
    <div className="container">
      <SideMenu />
      <div className="photos-container">
        {photos.map(photo => (
          !(showOnlyLikes && !photo.like) && < Photo key={photo.id} {...photo} />
        ))}
      </div>
    </div>
  );
}

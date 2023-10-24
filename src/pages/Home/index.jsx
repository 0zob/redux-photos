import { useSelector } from "react-redux";
import { Photo } from "../../components/Photo";
import "./index.css";

export function Home() {
  const photos = useSelector(state => state.photo);
  return (
    <div className="photos-container">
      {photos.map(photo => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}

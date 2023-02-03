import { useState } from "react";
import { SkeletPhotoBox } from "./ModaAdd.styled";

export const PhotoPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <SkeletPhotoBox>
      <img src={preview} alt="user's pet" width="116" height="116" />
    </SkeletPhotoBox>
  );
};

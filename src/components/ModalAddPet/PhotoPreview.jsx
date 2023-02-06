import { useState } from "react";
import { SkeletPhotoBox, ImagePrewiew } from "./ModaAdd.styled";

export const PhotoPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <SkeletPhotoBox>
      <ImagePrewiew src={preview} alt="user's pet" />
    </SkeletPhotoBox>
  );
};

import { useState } from "react";
import { SkeletPhotoBox, ImagePrewiew } from "../ModaAdd.styled";

export const PhotoPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.onload = () => {
    setPreview(reader.result);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
  
  return (
    <SkeletPhotoBox>
      <ImagePrewiew src={preview} alt="user's pet" />
    </SkeletPhotoBox>
  );
};

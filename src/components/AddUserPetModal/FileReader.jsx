import { useState } from "react";
import { FormImage } from "./FileReader.styled";

export const PhotoPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <FormImage src={preview} alt="user's pet" width="150" height="150" />
    </div>
  );
};

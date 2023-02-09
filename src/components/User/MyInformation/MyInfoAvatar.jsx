import { useState } from "react";
import {UserAvatar} from './MyInformationStyled'

export const PhotoPreviewAvatar = ({ file }) => {
  const [preview, setPreview] = useState(null);

//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     setPreview(reader.result);
//   };

  return (
    // <div>
      <UserAvatar src={file} alt="foto user" />
    // </div>
  );
};

import { selectGetError } from "../../redux/auth/autSelectors";
const { useSelector } = require("react-redux");

export const useError = () => {
  const result = useSelector(selectGetError);

  return result;
};

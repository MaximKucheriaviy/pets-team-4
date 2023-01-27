import { selectIsLogin } from "../../redux/auth/autSelectors"
const { useSelector } = require("react-redux")


export const useAuth = () => {
    const result = useSelector(selectIsLogin);

    return result;
};
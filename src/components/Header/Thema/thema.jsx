import { useDispatch } from "react-redux";
import { setDefaultThema, setDarkThema
 } from "../../../redux/thema/themaSlice";

export const Thema = () => {

const dispatch = useDispatch()



    const addHandler = () => {
dispatch(setDarkThema())
    }
    const closeHandler = () => {
        dispatch(setDefaultThema()) 
    }


	return (
	<div>
        <button onClick={addHandler}>+</button>
        <button onClick={closeHandler}>-</button>
        	</div>
	
	
	);
};
import PacmanLoader from "react-spinners/PacmanLoader";
import {Overlay}from "./Loader.styled";

export default function Loader (){
    return (
        <Overlay>
            <PacmanLoader
                color="#F59256"
                margin={10}
                size={70}
            />
        </Overlay>
    )
}
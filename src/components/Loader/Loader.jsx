import PacmanLoader from "react-spinners/PacmanLoader";
import {Overlay}from "./Loader.styled";
import { createPortal } from "react-dom";

export default function Loader (){
    const portalRoot = document.getElementById('loaderRoot')
    return (
        createPortal(
            <Overlay>
                <PacmanLoader
                    color="#F59256"
                    margin={10}
                    size={70}
                />
            </Overlay>
            , portalRoot
        )
    )
}
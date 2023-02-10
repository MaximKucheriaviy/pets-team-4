import {
  Backdrop,
  Modal,
  Key,
  Value,
  CloseButton,
  Coment,
  SuppurtThumb,
  ButtonThumb,
} from "./ModalPetInfoStyled";
import { createPortal } from "react-dom";
import { ReactComponent as Heart } from "./assets/heart.svg";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { useEffect, useState } from "react";
import { getFavorites } from "../../services/apiNotices";
import { useSelector } from "react-redux";
import { addToFavorite, removeToFavorite } from "../../services/apiNotices";
import { Navigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useLocation } from "react-router-dom";




export const ModalPetInfo = ({ close, modalInfo, update, setItems }) => {
  const portalRoot = document.querySelector("#portalRoot");
  const [isFavorite, setIsFavorite] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();
  const isFavoritePath = location.pathname.includes("favorite");
  const {
    imageURL,
    category,
    title,
    name,
    birthdate,
    breed,
    place,
    sex,
    email = "user@mail.com",
    phone = "+380971234567",
    price,
    comment,
    owner,
    _id,
  } = modalInfo;

  const closeHandler = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    close();
  };


  useEffect(() => {
    const keyEventHandler = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keyup", keyEventHandler);
    return () => {
      document.removeEventListener("keyup", keyEventHandler);
    };
  }, [close]);

  useEffect(() => {
    if(!token){
      return
    }
    (async () => {
      const favorites = await getFavorites(token);
      if (favorites.some((item) => item._id === _id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    })().catch((err) => {
      console.log(err);
    });
  }, [_id, token]);

  const addfavoriteHandler = async () => {
    if(!token){
      // console.log("there");
      setNavigate(true);
      Notify.warning("You are not autorese")
      return;
    }
    try {
      await addToFavorite(token, _id);
      setIsFavorite(true);
      update(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFavoriteHandler = async () => {
    try {
      await removeToFavorite(token, _id);
      setIsFavorite(false);
      update(true);
      if(isFavoritePath){
        setItems(state => {
          return state.filter(item => item._id !== _id);
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  return createPortal(
    <Backdrop onClick={closeHandler}>
      <Modal>
        <CloseButton onClick={close}>
          <Cross />
        </CloseButton>
        <SuppurtThumb>
          <div className="imageThumb">
            <div className="typeLable">{category}</div>
            <img src={imageURL} alt={name} />
          </div>
          <div>
            <h3>{title}</h3>
            <table>
              <tbody>
                <tr>
                  <Key>Name:</Key>
                  <Value>{name}</Value>
                </tr>
                <tr>
                  <Key>Birthday:</Key>
                  <Value>{birthdate}</Value>
                </tr>
                <tr>
                  <Key>Breed:</Key>
                  <Value>{breed}</Value>
                </tr>
                <tr>
                  <Key>Location:</Key>
                  <Value>{place}</Value>
                </tr>
                <tr>
                  <Key>The sex:</Key>
                  <Value>{sex}</Value>
                </tr>
                <tr>
                  <Key>Email:</Key>
                  <Value>
                    <a href={`mailto:${owner.email}`}>{owner.email}</a>
                  </Value>
                </tr>
                <tr>
                  <Key>Phone:</Key>
                  <Value>
                  <a href={`tel:${owner.phone}`}>{owner.phone}</a>
                    </Value>
                </tr>
                {(price && !(category === "lost-found" || category === "for-free")) && (
                  <tr>
                    <Key>Price:</Key>
                    <Value>{price}$</Value>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </SuppurtThumb>
        <Coment>
          <span>Comments: </span>
          {comment}
        </Coment>
        <ButtonThumb>
          <a className="modalButton" href={`tel:${phone}`}>
            Contact
          </a>
          {isFavorite ? (
            <button
              className="modalButton favoriteButton"
              type="button"
              onClick={removeFavoriteHandler}
            >
              Remove from{" "}
              <Heart
                style={{
                  marginLeft: "5px",
                }}
              />
            </button>
          ) : (
            <button
              className="modalButton favoriteButton"
              type="button"
              onClick={addfavoriteHandler}
            >
              Add to{" "}
              <Heart
                style={{
                  marginLeft: "5px",
                }}
              />
            </button>
          )}
        </ButtonThumb>
      </Modal>
      {navigate &&  <Navigate to="/login" replace={true} />}
    </Backdrop>,
    portalRoot
  );
};

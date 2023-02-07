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
import { ReactComponent as Heart }from "./assets/heart.svg"
import { ReactComponent as Cross } from "./assets/cross.svg";
import { useEffect } from "react";

export const ModalPetInfo = ({ close, modalInfo }) => {
  const portalRoot = document.querySelector("#portalRoot");
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
    // favorite,
    // owner,
    // _id,
  } = modalInfo;

  //   console.log(modalInfo);

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
                  <Value>{email}</Value>
                </tr>
                <tr>
                  <Key>Phone:</Key>
                  <Value>{phone}</Value>
                </tr>
                {price && (
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
          <button className="modalButton favoriteButton" type="button">
            Add to <Heart style={{
              marginLeft: "5px"
            }}/>
          </button>
        </ButtonThumb>
      </Modal>
    </Backdrop>,
    portalRoot
  );
};

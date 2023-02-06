import { Backdrop, Modal, Key, Value } from "./ModalPetInfoStyled"
import { createPortal } from "react-dom"


export const ModalPetInfo = ({
    id="12321232123",
    imgURL="data:image/jpeg;base64,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",
    type = 'In good hands',
    title = 'Сute dog looking for a home',
    name = 'Rich',
    birthday = '21.09.2020',
    breed = 'Pomeranian',
    lovation = 'Lviv', 
    sex = 'male',
    email = 'user@mail.com',
    phone = '+380971234567',
    comments = 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem'
    }) => {
    const portalRoot = document.querySelector('#portalRoot');
    return createPortal(<Backdrop>
        <Modal>
            <div className="imageThumb">
                <div className="typeLable">{type}</div>
                <img src={imgURL} alt={name}/>
            </div>
            <h3>{title}</h3>
            <table>
                <tbody>
                    <tr>
                        <Key>Name:</Key>
                        <Value>{name}</Value>
                    </tr>
                    <tr>
                        <Key>Birthday:</Key>
                        <Value>{birthday}</Value>
                    </tr>
                    <tr>
                        <Key>Breed:</Key>
                        <Value>{breed}</Value>
                    </tr>
                    <tr>
                        <Key>Lovation:</Key>
                        <Value>{lovation}</Value>
                    </tr>
                    <tr>
                        <Key>Email:</Key>
                        <Value>{email}</Value>
                    </tr>
                    <tr>
                        <Key>Phone:</Key>
                        <Value>{phone}</Value>
                    </tr>
                </tbody>
            </table>
            <a href={`tel:${phone}`}>Contact</a>
            <button></button>
        </Modal>
    </Backdrop>, portalRoot);
}
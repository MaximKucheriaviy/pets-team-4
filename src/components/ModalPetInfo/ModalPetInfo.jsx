import { Backdrop, Modal, Key, Value } from "./ModalPetInfoStyled"
import { createPortal } from "react-dom"


export const ModalPetInfo = ({
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
        </Modal>
    </Backdrop>, portalRoot);
}
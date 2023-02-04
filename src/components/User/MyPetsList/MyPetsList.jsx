// import PropTypes from 'prop-types';

import { PetsItemStyled, PetsHederStyled } from './MyPetsListStyled'
// import {UserIcons} from '../UserIcons/UserIcons'


import MyPets from '../MyPetsItem/MyPetsItem'
import AddButtonNotMobile from '../../Notices/AddNoticeButton/AddButtonNotMobile/AddButtonNotMobile'



export default function MyPetsList({ addPet, items, deletePet }) {
    return (
        <div>
            <PetsHederStyled>
                <h3 className='pets-add-hed'>My pets:</h3>
                <div className='pets-add'>
                    {/* <h3 className='pets-add-hed'>Add pet</h3> */}
                    <AddButtonNotMobile/>
                    {/* <button
                        type="button"
                        className='pets-addbtn'
                        onClick={() => {addPet()}}
                    > */}
                        {/* <UserIcons id="icon-user_plus"/> */}
                        {/* <svg className='pets-add-icon' xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
                        </svg> */}
                    {/* </button> */}
                </div>
            </PetsHederStyled>
            {/* <MyPets items={items} deletePet={deletePet} /> */}
            <ul>
                {items.map(item => (
                    <PetsItemStyled key={item.id}>
                        <MyPets
                            img={item.img}
                            name={item.name}
                            data={item.data}
                            breed={item.breed}
                            comments={item.comments}
                            owner={item.owner}
                            deletePet={deletePet} />
                    </PetsItemStyled>
                ))}
            </ul>
        </div>
    )
}

// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
        // PropTypes.shape({
        //     id:PropTypes.string.isRequired,
        // })
//     )
// }


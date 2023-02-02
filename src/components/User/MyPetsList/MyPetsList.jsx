// import PropTypes from 'prop-types';

import {PetsItemStyled, PetsHederStyled} from './MyPetsListStyled'


import MyPets from '../MyPetsItem/MyPetsItem'

export default function MyPetsList({ items }) {
    return (
        <div>
            <PetsHederStyled>
                <h3 className='pets-add-hed'>My pets:</h3>
                <div className='pets-add'>
                    <h3 className='pets-add-hed'>Add pet</h3>
                    <button type="button" className='pets-addbtn'>
                        <svg className='pets-add-icon'g xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path stroke="#fff" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
                        </svg>
                    </button>
                </div>
            </PetsHederStyled>
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
                            deletePet />
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


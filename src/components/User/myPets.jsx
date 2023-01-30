// import PropTypes from 'prop-types';

import {PetsContainerStyled, PetsItemStyled} from './myPetsStyled'


export default function MyPets({ id, img, name, data, breed, comments, owner, deletePet }) {
        return (
            <PetsContainerStyled>
                <div>
                    <ul>
                        <PetsItemStyled key={id}>
                            <img className='card-avatar' src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} />
                            <div className='card-info'>
                                <p>
                                    <b>Name:</b>{name}
                                </p>
                                <p>
                                    <b>Date of birth:</b>{data}
                                </p>
                                <p >
                                    <b>Breed:</b>{breed}
                                </p>
                                <p >
                                    <b>Comments:</b>{comments}
                                </p>
                                <p>
                                    {owner}
                                </p>
                            </div>
                <button
                    className='card-btn'
                    type="button"
                    onClick={() => {
                        deletePet(id);
                    }}
                >
                    <svg className='card-icons' width="18" height="18">
                        <path fill="#111" fill-opacity=".6" d="M7.75 2.75h2.5a1.25 1.25 0 0 0-2.5 0Zm-1.25 0a2.5 2.5 0 1 1 5 0h5a.625.625 0 1 1 0 1.25h-.705l-1.506 11.047a3.125 3.125 0 0 1-3.096 2.703H6.808a3.125 3.125 0 0 1-3.097-2.703L2.205 4H1.5a.625.625 0 0 1 0-1.25h5Zm1.25 4.375a.625.625 0 0 0-1.25 0v6.25a.625.625 0 1 0 1.25 0v-6.25Zm3.125-.625a.625.625 0 0 0-.625.625v6.25a.624.624 0 1 0 1.25 0v-6.25a.625.625 0 0 0-.625-.625Z"/>
                    </svg>
                </button>
                        </PetsItemStyled>
                    </ul>
                </div>
            </PetsContainerStyled>
        )
}

// MyPets.propTypes = {
//     name: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     dateOfBirth: PropTypes.string.isRequired,
//     breed: PropTypes.string.isRequired,
//     comments: PropTypes.string.isRequired,
// }

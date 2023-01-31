// import PropTypes from 'prop-types';

import MyPets from '../MyPetsItem/MyPetsItem'

export default function MyPetsList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <MyPets
                        img={item.img}
                        name={item.name}
                        data={item.data}
                        breed={item.breed}
                        comments={item.comments}
                        owner={item.owner}
                        deletePet />
                </li>
            ))}
        </ul>
    )
}

// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
        // PropTypes.shape({
        //     id:PropTypes.string.isRequired,
        // })
//     )
// }


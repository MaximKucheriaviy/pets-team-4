// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'


import { MyInform} from './MyInformationStyled';



export default function MyInformation({users}) {
    const { avatar, name, email, birthday, phone, city } = users;
    const DefaultAvatar = 'https://pixabay.com/get/g4b942c8109a1b73d03593f3b956594751982cc448837347200f15814f41a7498ef3350609efe0fd866c17f96580baaea_640.jpg';


    return (
        <MyInform >
            <div className='user-cont'>
                <img className='user-avatar' src={avatar||DefaultAvatar} alt={name} />
                <button type="button" >
                    <UserIcons id="camera"/>
                    <p>Edit photo</p>
                </button>
            </div>
            <table className='user-tabl'>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <th>{name}</th>
                        <th className='table-red'>
                            <button>
                                <UserIcons id="icon-user_red"/>
                                <UserIcons id="icon-user_done"/>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <th>{email}</th>
                        <th className='table-red'>
                            <button>
                                <UserIcons id="icon-user_red"/>
                                <UserIcons id="icon-user_done"/>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <td>Birthday:</td>
                        <th>{birthday}</th>
                        <th className='table-red'>
                            <button>
                                <UserIcons id="icon-user_red"/>
                                <UserIcons id="icon-user_done"/>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <th>{phone}</th>
                        <th className='table-red'>
                            <button>
                                <UserIcons id="icon-user_red"/>
                                <UserIcons id="icon-user_done"/>
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <th>{city}</th>
                        <th className='table-red'>
                            <button>
                                <UserIcons id="icon-user_red"/>
                                <UserIcons id="icon-user_done"/>
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>


        </MyInform>
    )
}

// export default function MyInformation({users}) {
//     return (
//         <MyInformItem>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         <MyItemInformation name={user.name}  />

//                     </li>
//                 ))}
//             </ul>
//         </MyInformItem>
//     )
// }




// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
        // PropTypes.shape({
        //     id:PropTypes.string.isRequired,
        // })
//     )
// }




            // <div className='user-text'>
            //     <p><b>Name: </b>{name}</p>
            //     <p><b>Email: </b>{email}</p>
            //     <p><b>Birthday: </b>{birthday}</p>
            //     <p><b>Phone: </b>{phone}</p>
            //     <p><b>City: </b>{city}</p>
            // </div>


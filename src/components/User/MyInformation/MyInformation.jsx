// import PropTypes from 'prop-types';


import { MyInform, MyInformItem } from './MyInformationStyled'




const  MyItemInformation = ({avatar, name, email, birthday, phone, city}) => {
    // const { avatar, name, email, birthday, phone, city } = user;
    return (
        <MyInform>
            <div className='user-cont'>
                <img className='user-avatar' src={avatar} alt={name} />
                <button type="button" >
                    <svg className='user-avatar-icons' width="16.25" height="17.5">
                        <path d="M10 7.708a2.708 2.708 0 1 0 0 5.417 2.708 2.708 0 0 0 0-5.417Z"/>
                        <path fill-rule="evenodd" d="M7.708.208c-1.15 0-2.083.933-2.083 2.084v.148a.685.685 0 0 1-.685.685 3.899 3.899 0 0 0-3.898 3.899v3.842c0 1.336 0 2.384.08 3.22.08.854.248 1.552.626 2.168a4.792 4.792 0 0 0 1.582 1.581c.615.378 1.314.546 2.167.627.837.08 1.884.08 3.22.08h2.566c1.336 0 2.383 0 3.22-.08.853-.081 1.552-.25 2.167-.627a4.792 4.792 0 0 0 1.582-1.581c.378-.616.546-1.315.627-2.168.08-.836.08-1.884.08-3.22V7.024a3.899 3.899 0 0 0-3.9-3.9.684.684 0 0 1-.684-.684v-.148c0-1.151-.933-2.084-2.083-2.084H7.708ZM6.042 10.417a3.958 3.958 0 1 1 7.916 0 3.958 3.958 0 0 1-7.916 0ZM15 7.917a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Z" clip-rule="evenodd" />
                    </svg>
                    <p>Edit photo</p>
                </button>
            </div>
            <table className='user-tabl'>
                <tr>
                    <td>Name:</td>
                    <th>{name}</th>
                    <th className='table-red'>
                        <button>
                            <svg className='icons-red' width="16.25" height="17.5">
                                <path d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"/>
                            </svg>
                            <svg className='icons-done'>
                                <path d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z" />
                            </svg>
                        </button>
                    </th>
                </tr>
                <tr>
                    <td>Email:</td>
                    <th>{email}</th>
                    <th className='table-red'>
                        <button>
                            <svg className='icons-red' width="16.25" height="17.5">
                                <path d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"/>
                            </svg>
                            <svg className='icons-done'>
                                <path d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z" />
                            </svg>
                        </button>
                    </th>
                </tr>
                <tr>
                    <td>Birthday:</td>
                    <th>{birthday}</th>
                    <th className='table-red'>
                        <button>
                            <svg className='icons-red' width="16.25" height="17.5">
                                <path d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"/>
                            </svg>
                            <svg className='icons-done'>
                                <path d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z" />
                            </svg>
                        </button>
                    </th>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <th>{phone}</th>
                    <th className='table-red'>
                        <button>
                            <svg className='icons-red' width="16.25" height="17.5">
                                <path d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"/>
                            </svg>
                            <svg className='icons-done'>
                                <path d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z" />
                            </svg>
                        </button>
                    </th>
                </tr>
                <tr>
                    <td>City:</td>
                    <th>{city}</th>
                    <th className='table-red'>
                        <button>
                            <svg className='icons-red' width="16.25" height="17.5">
                                <path d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"/>
                            </svg>
                            <svg className='icons-done'>
                                <path d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z" />
                            </svg>
                        </button>
                    </th>
                </tr>
            </table>


        </MyInform>
    )
}

export default function MyInformation({users}) {
    return (
        <MyInformItem>
            <ul>
                {users.map(user => (
                    <li>
                        <MyItemInformation avatar={user.avatar} name={user.name} email={user.email} birthday={user.birthday} phone={user.phone} city={user.city} />

                    </li>
                ))}
            </ul>
        </MyInformItem>
    )
}




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


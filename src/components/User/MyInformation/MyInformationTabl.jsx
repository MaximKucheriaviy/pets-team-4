// 
import {  useState } from 'react';


import { UserIcons } from '../UserIcons/UserIcons'


import { useTranslation } from 'react-i18next';

const MyInformationTabl = ({ tablItem }) => {
    const { name = "default", email = "default", birthday = '01.01.1900', phone = "default", city = "default" } = tablItem;
  const { t} = useTranslation();
    const [showInput, setShowInput] = useState(false);


    const handleChange = () => {
        // написати 
    }

    const handleSubmit = () => {
    // написати 
    }


    const openInput = () => {
        setShowInput(true);
    };

    const closeInput = () => {
        setShowInput(false);
    };


    return (
        <table className='user-tabl'>
            <tbody>
                <tr>
                    <td>{t("name")}:</td>
                    {!showInput && <th>{name}</th>}
                    {!showInput && <th className='table-red'>
                        <button type='button' onClick={openInput}>
                            <UserIcons id="icon-user_red" />
                        </button>
                    </th> }
                    {showInput &&
                        <th>
                            <input type="text" name="name" onChange={handleChange}  placeholder={name} />
                        </th>}
                    {showInput &&
                        <th className='table-red'>
                            <button type='submit' onClick={closeInput} onSubmit={handleSubmit}>
                                <UserIcons id="icon-user_done" />
                            </button>
                        </th>
                    }

                </tr>
                <tr>
                    <td>{t("email")}:</td>
                    {!showInput && <th>{email}</th>}
                    {!showInput && <th className='table-red'>
                        <button type='button' onClick={openInput}>
                            <UserIcons id="icon-user_red" />
                        </button>
                    </th>}
                    {showInput &&
                        <th>
                            <input type="text" name="name" onChange={handleChange}  placeholder={email} />
                        </th>}
                    {showInput &&
                        <th className='table-red'>
                            <button type='submit' onClick={closeInput} onSubmit={handleSubmit}>
                                <UserIcons id="icon-user_done" />
                            </button>
                        </th>
                    }
                </tr>
                <tr>
                    <td>{t("brth")}:</td>
                    {!showInput && <th>{birthday}</th>}
                    {!showInput && <th className='table-red'>
                        <button type='button' onClick={openInput}>
                            <UserIcons id="icon-user_red" />
                        </button>
                    </th>}
                    {showInput &&
                        <th>
                            <input type="text" name="name" onChange={handleChange}  placeholder={birthday} />
                        </th>}
                    {showInput &&
                        <th className='table-red'>
                            <button type='submit' onClick={closeInput} onSubmit={handleSubmit}>
                                <UserIcons id="icon-user_done" />
                            </button>
                        </th>
                    }
                </tr>
                <tr>
                    <td>{t("phone")}:</td>
                    {!showInput && <th>{phone}</th>}
                    {!showInput && <th className='table-red'>
                        <button type='button' onClick={openInput}>
                            <UserIcons id="icon-user_red" />
                        </button>
                    </th>}
                    {showInput &&
                        <th>
                            <input type="text" name="name" onChange={handleChange}  placeholder={phone} />
                        </th>}
                    {showInput &&
                        <th className='table-red'>
                            <button type='submit' onClick={closeInput} onSubmit={handleSubmit}>
                                <UserIcons id="icon-user_done" />
                            </button>
                        </th>
                    }
                </tr>
                <tr>
                    <td>{t("city")}:</td>
                    {!showInput && <th>{city}</th>}
                    {!showInput && <th className='table-red'>
                        <button type='button' onClick={openInput}>
                            <UserIcons id="icon-user_red" />
                        </button>
                    </th>}
                    {showInput &&
                        <th>
                            <input type="text" name="name" onChange={handleChange}  placeholder={city} />
                        </th>}
                    {showInput &&
                        <th className='table-red'>
                            <button type='submit' onClick={closeInput} onSubmit={handleSubmit}>
                                <UserIcons id="icon-user_done" />
                            </button>
                        </th>
                    }
                </tr>
            </tbody>
        </table>

    )
}

export default MyInformationTabl;
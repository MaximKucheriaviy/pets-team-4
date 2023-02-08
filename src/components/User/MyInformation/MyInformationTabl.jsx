// 

import {EditName, EditEmail, EditBirthday, EditPhone, EditCity} from './MyInformationRenameInfo'



const MyInformationTabl = ({ tablItem }) => {
    const { name = "default", email = "default", birthday = '01.01.1900', phone = "default", city = "default" } = tablItem;

    return (
        <table className='user-tabl'>
            <tbody>
                <EditName name={name} />
                <EditEmail email={email} />
                <EditBirthday birthday={birthday} />
                <EditPhone phone={phone} />
                <EditCity city={city} />
            </tbody>
        </table>

    )
}

export default MyInformationTabl;
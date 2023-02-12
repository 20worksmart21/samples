import { useRef, useState } from "react"
import { phoneValidate, validateEmail } from '../utils/inputValidation';

const Display = ({ list }) => {
    return <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>

        </thead>
        <tbody>
            {list.map(l => {
                return <tr key={l.id}>
                    <td>{l.id}</td>
                    <td>{l.name}</td>
                    <td>{l.phone}</td>
                    <td>{l.email}</td>
                </tr>
            })}
        </tbody>
    </table>
}

let count = 1;
const InfoInputComponent = ({ directoryList, setdirectoryList }) => {
    const nameNode = useRef(null);
    const emailNode = useRef(null);
    const phoneNode = useRef(null);
    const [errormessage, seterrormessage] = useState('');
    const saveInfo = () => {
        const name = nameNode.current.value;
        const email = emailNode.current.value;
        const phone = phoneNode.current.value;
        if (!name || !email || !phone) {
            seterrormessage("please input all");
            return;
        }
        const isValidatePhone = phoneValidate(phone);
        if (!isValidatePhone) {
            seterrormessage("incorrect phone");
            return
        }
        const isValidateEmail = validateEmail(email);

        if (!isValidateEmail) {
            seterrormessage("incorrect email");
            return
        }
        seterrormessage("");
        const newdirectoryList = [...directoryList, {
            id: ++count,
            name,
            phone,
            email
        }];
        setdirectoryList(newdirectoryList)
    }
    return <div style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
        <div>Error: {errormessage}</div>
        <label htmlFor="name">Person Name</label>
        <input type='text' name="name" ref={nameNode} />
        <label htmlFor="number">Numer</label>
        <input type='text' name="name" ref={phoneNode} />
        <label htmlFor="email">Email</label>
        <input type='email' name="email" ref={emailNode} />
        <button onClick={saveInfo}> submit </button>
    </div>
}

const Directory = () => {
    const [directoryList, setdirectoryList] = useState([{
        id: 1,
        name: 'dan',
        phone: '23225252555',
        email: 'af@afag'
    }])
    return <div style={{ display: 'flex' }}>
        <InfoInputComponent setdirectoryList={setdirectoryList} directoryList={directoryList} />
        <Display list={directoryList} />
    </div>

}
export default Directory;
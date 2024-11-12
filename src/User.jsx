import { useEffect, useState } from "react"
import SingleUser from './SingleUser'
export default function Users({ name }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Total Users :{users.length}</h3>
            {
                users.map(singleUser => <SingleUser singleUser={singleUser} ></SingleUser>)
            }

            {/* <button onClick={handleClick}>Add</button> */}
        </div>
    )

}











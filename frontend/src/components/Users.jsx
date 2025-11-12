import React,{useState,useEffect} from 'react'
import styles from './Users.module.css'
import axios from 'axios'
export default function Users() {
    // fetch the users from backend api using axios
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8000/users')
            setUsers(response.data.users)
        }
        fetchUsers()
    }, [])
    console.log(users)
  return (
    <div className={styles.container}>
        {/* loader before response */}
        {users.length === 0 && <div className={styles.loader}>Loading...</div>}
        {users.length > 0 && ( 
        <>
        <h1 className={styles.title}>Users</h1>
        <div className={styles.usersList}>
            {users.map((user) => (
                <div key={user.id} className={styles.user}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
        </>
        )}
    </div>
  )
}

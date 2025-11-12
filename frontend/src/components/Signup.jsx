import React from 'react'
import { useState } from 'react'
import style from './Signup.module.css'
import axios from 'axios'
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/register', { name, email, password })
            console.log(response.data)
            if (response.status === 201) {
                alert('User created successfully')
            } else {
                alert('Error signing up')
            }
            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            console.error('Error signing up', error)
        }
    }
    return (
        <div className={style.signup}>
            <h1 className={style.title}>Signup</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

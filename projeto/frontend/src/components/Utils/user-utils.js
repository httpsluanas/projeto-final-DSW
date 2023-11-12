import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(() => {
        const storedToken = localStorage.getItem('token')
        const storedUserInfo = localStorage.getItem('userInfo')
  
        if (storedToken && storedUserInfo) {
            return { token: storedToken, user_info: JSON.parse(storedUserInfo) }
        }
  
        return null
    })
  
    const updateUser = (newUserInfo) => {
        setUserInfo(newUserInfo)
    }
  
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
  
        setUserInfo(null)
    }
  
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUserInfo = localStorage.getItem('userInfo')
  
        if (storedToken && storedUserInfo) {
            setUserInfo({ token: storedToken, user_info: JSON.parse(storedUserInfo) })
        }
    }, []) // O segundo argumento vazio garante que o useEffect seja executado apenas uma vez, ao montar o componente
  
    return (
        <UserContext.Provider value={{ userInfo, updateUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}